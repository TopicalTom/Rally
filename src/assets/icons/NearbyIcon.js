import * as React from "react"
import Svg, { G, Path, Circle } from "react-native-svg"

export const NearbyIcon = ({ focused }) => {
    return (
        <Svg width={24} height={28} viewBox="0 0 24 28">
            <G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <G transform="translate(-28.000000, -26.000000)">
                    <G transform="translate(30.000000, 28.000000)">
                        <Path strokeWidth={2} d="M10,-1 C12.9587618,-1 15.644573,0.165737218 17.6168798,1.94081326 C19.7202308,3.8338292 21,6.41213055 21,9 C21,12.3356636 19.5526487,15.8415184 17.6428331,18.7062418 C15.0996435,22.5210262 11.7817498,25 10,25 C8.2182502,25 4.90035651,22.5210262 2.35716686,18.7062418 C0.44735128,15.8415184 -1,12.3356636 -1,9 C-1,6.41213055 0.279769202,3.8338292 2.38312024,1.94081326 C4.35542696,0.165737218 7.04123821,-1 10,-1 Z" id="Outer" stroke="#FFFFFF" stroke-width="2"></Path>
                        {focused
                            ?   <Path strokeWidth={2}  d="M10,0 C15.5228475,0 20,4.45800868 20,9 C20,16.1134199 12.9166667,24 10,24 C7.08333333,24 0,16.1134199 0,9 C0,4.45800868 4.4771525,0 10,0 Z M10,6 C8.06700338,6 6.5,7.56700338 6.5,9.5 C6.5,11.4329966 8.06700338,13 10,13 C11.9329966,13 13.5,11.4329966 13.5,9.5 C13.5,7.56700338 11.9329966,6 10,6 Z" id="InnerActive" fill="#FFFFFF"></Path>
                            :   <Circle strokeWidth={2}  stroke="#FFFFFF" stroke-width="2" cx="10" cy="9.5" r="3.5"></Circle>
                        }
                    </G>
                </G>
            </G>
        </Svg>
    )
};