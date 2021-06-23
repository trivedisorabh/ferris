import { ForwardRefExoticComponent, SVGAttributes } from 'react';
import Check from './Check';
import CloseAllFaults from './CloseAllFaults';
import CloseFault from './CloseFault';
import OpenInNew from './OpenInNew';

export type IconsData = {
	glyph: ForwardRefExoticComponent<SVGAttributes<SVGSVGElement>>;
};

const Icons: Readonly<{
	[key: string]: IconsData;
}> = {
	Check: { glyph: Check },
	CloseAllFaults: { glyph: CloseAllFaults },
	CloseFault: { glyph: CloseFault },
	OpenInNew: { glyph: OpenInNew },
};

export default Icons;
