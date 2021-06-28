import Check from './components/Check';
import CloseAllFaults from './components/CloseAllFaults';
import CloseFault from './components/CloseFault';
import OpenInNew from './components/OpenInNew';
import { ForwardRefExoticComponent, SVGAttributes } from 'react';

export type IconData = {
	glyph: ForwardRefExoticComponent<SVGAttributes<SVGSVGElement>>;
};

const Icons: Readonly<{
	[key: string]: IconData;
}> = {
	Check: { glyph: Check },
	CloseAllFaults: { glyph: CloseAllFaults },
	CloseFault: { glyph: CloseFault },
	OpenInNew: { glyph: OpenInNew },
};

export default Icons;
