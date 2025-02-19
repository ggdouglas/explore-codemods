import React from "react";

import { Classes, Icon, Tooltip } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { Popover2, Popover2InteractionKind } from "@blueprintjs/popover2";

export function App() {
    return (
        (<span className={Classes.POPOVER_WRAPPER}>
            <Tooltip placement="bottom" content="This is a tooltip">
                <Icon icon={IconNames.INFO_SIGN} />
            </Tooltip>
            <Popover2 interactionKind={Popover2InteractionKind.HOVER} content={<div>This is a popover</div>}>
                <Icon icon={IconNames.HELP} />
            </Popover2>
        </span>)
    );
}