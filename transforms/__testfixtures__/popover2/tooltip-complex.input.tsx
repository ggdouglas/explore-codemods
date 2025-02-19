import React from "react";

import { Classes, Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { Popover2, Popover2InteractionKind, Tooltip2 } from "@blueprintjs/popover2";

export function App() {
    return (
        <span className={Classes.POPOVER_WRAPPER}>
            <Tooltip2 placement="bottom" content="This is a tooltip">
                <Icon icon={IconNames.INFO_SIGN} />
            </Tooltip2>
            <Popover2 interactionKind={Popover2InteractionKind.HOVER} content={<div>This is a popover</div>}>
                <Icon icon={IconNames.HELP} />
            </Popover2>
        </span>
    );
}
