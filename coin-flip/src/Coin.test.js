import React from "react";
import { render } from "@testing-library/react";
import Coin from "./Coin";

it("renders without crashing", () => {
    render(<Coin />);
});

it("matches snapshot", () => {
    const {asFragment} = render(<Coin />);
    expect(asFragment()).toMatchSnapshot();
})
