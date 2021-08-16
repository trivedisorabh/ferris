import Check from './assets/Check';
import Close from './assets/Close';
import CloseAllFaults from './assets/CloseAllFaults';
import CloseFault from './assets/CloseFault';
import OpenInNew from './assets/OpenInNew';
import { ForwardRefExoticComponent, SVGAttributes } from 'react';

export type IconData = {
	glyph: ForwardRefExoticComponent<SVGAttributes<SVGSVGElement>>;
};

const Icons: Readonly<{
	[key: string]: IconData;
}> = {
	Check: { glyph: Check },
	Close: { glyph: Close },
	CloseAllFaults: { glyph: CloseAllFaults },
	CloseFault: { glyph: CloseFault },
	OpenInNew: { glyph: OpenInNew },
};

export default Icons;
