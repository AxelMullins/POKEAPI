import React, { useState } from "react";
import { css } from "@emotion/react";
import { PacmanLoader } from "react-spinners";

const override = css`
    display: block;
    margin: 0 auto;
`;

const Loader = () => {
    let [loading] = useState(true);
    let [color] = useState("#dedede");
    return (
        <div role="status">
        <PacmanLoader
            color={color}
            loading={loading}
            css={override}
            size={40}
            margin={2}
        />
        </div>
    );
};

export default Loader;
