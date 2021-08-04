import * as React from "react"
import Svg, { G, Line, Path } from "react-native-svg"

export const SearchIcon = ({ focused }) => {
    return (
        <Svg width={28} height={28} viewBox="0 0 26 26">
            <G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <G transform="translate(-27.000000, -27.000000)" stroke="#FFFFFF" stroke-width="2">
                    <G transform="translate(29.000000, 29.000000)">
                        <Line strokeWidth={focused ? 3 : 2} x1="16.5" y1="16.5" x2="22.9" y2="22.9" stroke-linecap="round"></Line>
                        <Path strokeWidth={focused ? 3 : 2} d="M9,-1 C11.7614237,-1 14.2614237,0.119288125 16.0710678,1.92893219 C17.8807119,3.73857625 19,6.23857625 19,9 C19,11.7614237 17.8807119,14.2614237 16.0710678,16.0710678 C14.2614237,17.8807119 11.7614237,19 9,19 C6.23857625,19 3.73857625,17.8807119 1.92893219,16.0710678 C0.119288125,14.2614237 -1,11.7614237 -1,9 C-1,6.23857625 0.119288125,3.73857625 1.92893219,1.92893219 C3.73857625,0.119288125 6.23857625,-1 9,-1 Z"></Path>
                    </G>
                </G>
            </G>
        </Svg>
    )
};