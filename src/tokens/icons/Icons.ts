import Check from './assets/Check';
import ChevronDown from './assets/ChevronDown';
import ChevronUp from './assets/ChevronUp';
import Close from './assets/Close';
import CloseAllFaults from './assets/CloseAllFaults';
import CloseFault from './assets/CloseFault';
import OpenInNew from './assets/OpenInNew';
import Search from './assets/Search';
import { ForwardRefExoticComponent, SVGAttributes } from 'react';

export type IconData = {
	glyph: ForwardRefExoticComponent<SVGAttributes<SVGSVGElement>>;
};

const Icons: Readonly<{
	[key: string]: IconData;
}> = {
	Check: { glyph: Check },
	ChevronDown: { glyph: ChevronDown },
	ChevronUp: { glyph: ChevronUp },
	Close: { glyph: Close },
	CloseAllFaults: { glyph: CloseAllFaults },
	CloseFault: { glyph: CloseFault },
	OpenInNew: { glyph: OpenInNew },
	Search: { glyph: Search },
};

export default Icons;
