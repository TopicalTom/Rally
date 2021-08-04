export const rallyTypes = (squads, socialCircle) => {
    return [
        {
            title: "Hangout",
            caption: "Go with the flow and join friends with their plans.",
            accent: "rgba(253,45,85,1)",
            accentBorder: "rgba(253,45,85,.5)",
            accentTint: "rgba(253,45,85,.1)",
            squad: squads.filter(item => item.type === "Hangout")[0], 
            activity: socialCircle.filter(item => item.rally === "Hangout")
        },
        {
            title: "Nightlife",
            caption: "Experience night-time events and activities with friends.",
            accent: "rgba(139,111,246,1)",
            accentBorder: "rgba(139,111,246,.5)",
            accentTint: "rgba(139,111,246,.1)",
            squad: squads.filter(item => item.type === "Nightlife")[0], 
            activity: socialCircle.filter(item => item.rally === "Nightlife")
        },
        {
            title: "Drinks",
            caption: "Grab a glass (or two) with friend at a local bar.",
            accent: "rgba(239,135,69,1)",
            accentBorder: "rgba(239,135,69,.5)",
            accentTint: "rgba(239,135,69,.1)",
            squad: squads.filter(item => item.type === "Drinks")[0], 
            activity: socialCircle.filter(item => item.rally === "Drinks")
        },
        {
            title: "Food",
            caption: "Get something to eat with friends at a local restaurant.",
            accent: "rgba(252,183,40, 1)",
            accentBorder: "rgba(252,183,40, .5)",
            accentTint: "rgba(252,183,40, .1)",
            squad: squads.filter(item => item.type === "Food")[0], 
            activity: socialCircle.filter(item => item.rally === "Food")
        },
        {
            title: "Fitness",
            caption: "Get fit with friends by engaging in healthy activities.",
            accent: "rgba(32,215,96,1)",
            accentBorder: "rgba(32,215,96,.5)",
            accentTint: "rgba(32,215,96,.1)",
            squad: squads.filter(item => item.type === "Fitness")[0], 
            activity: socialCircle.filter(item => item.rally === "Fitness")
        },
        {
            title: "Entertainment",
            caption: "Experience day-time event & activities with friends.",
            accent: "rgba(68,173,255,1)",
            accentBorder: "rgba(68,173,255,.5)",
            accentTint: "rgba(68,173,255,.1)",
            squad: squads.filter(item => item.type === "Entertainment")[0], 
            activity: socialCircle.filter(item => item.rally === "Entertainment")
        }
    ]
};