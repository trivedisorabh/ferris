const jsonToTree = (name, obj) => {
	const outp = {
		name,
		items: {},
		children: [],
	};

	for (const key of Object.keys(obj)) {
		const value = obj[key];

		switch (typeof value) {
			case 'string':
			case 'number':
				outp.items[key] = value;
				break;

			case 'object':
				outp.children.push(jsonToTree(key, value));
				break;

			default:
				console.log('Unexpected value', name, value);
				break;
		}
	}

	return outp;
};

const formatTree = (typeName, category) => {
	if (!category) {
		return '';
	}

	const getKeys = (category) => [
		...Object.keys(category.items).map((key) => {
			const value = category.items[key];
			return `${key} = ${JSON.stringify(value)}`;
		}),
		...category.children.flatMap((subCategory) =>
			getKeys(subCategory).map((key) => subCategory.name + key[0].toUpperCase() + key.substr(1))
		),
	];

	const keys = getKeys(category)
		.map((key) => `\t${key}`)
		.join(',\n');

	return [`enum ${typeName} {`, keys, '}', '', `export default ${typeName}`].join('\n');
};

const jsonToTsEnum = (name, obj) => {
	const tree = jsonToTree(undefined, obj);

	const outp = formatTree(name, tree);

	return outp;
};

module.exports = jsonToTsEnum;
