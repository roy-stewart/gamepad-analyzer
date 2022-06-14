import {
    LEFT_SHOULDER,
    RIGHT_SHOULDER,
    LEFT_TRIGGER,
    RIGHT_TRIGGER,
} from "../../../constants";
import PropTypes from "prop-types";
import { useButton } from "../../../hooks";
import styles from "./basic-analyzer.module.css";
import classNames from "classnames";

export const TopView = () => {
    const leftBumperButton = useButton(LEFT_SHOULDER);
    const rightBumperButton = useButton(RIGHT_SHOULDER);

    const leftTrigger = useButton(LEFT_TRIGGER);
    const rightTrigger = useButton(RIGHT_TRIGGER);

    return (
        <svg viewBox="0 0 138.46764 58.538776">
            <g id="layer1" transform="translate(-0.86947183,-0.33617702)">
                <path
                    d="m 169.85776,113.30636 c 0,0 -0.23942,5.30552 0.26824,7.88638 0.4674,2.37614 1.27652,4.73626 2.5215,6.8134 1.30252,2.17313 2.76855,3.7288 4.82839,5.20394 1.57695,1.12932 3.41671,2.05205 5.31124,2.46785 1.0137,0.22248 3.37988,0.37554 3.37988,0.37554 0,0 4.1964,2.47777 6.54516,2.89704 2.22265,0.39676 4.70226,0.5005 6.75975,-0.4292 1.42889,-0.64566 2.36665,-2.08613 3.32623,-3.32622 1.2951,-1.67368 1.72252,-3.97578 3.21893,-5.47219 1.63514,-1.63514 3.43353,-1.39487 3.43353,-1.39487 v -15.98735 l -37.44689,-4.39921 z"
                    className={classNames(styles.filled, styles.outlined)}
                    transform="translate(-168.79767,-80.499301)"
                />
                <path
                    className={classNames(styles.filled, styles.outlined)}
                    d="m 169.74494,113.30636 c 0,0 0.23942,5.30552 -0.26824,7.88638 -0.4674,2.37614 -1.27652,4.73626 -2.5215,6.8134 -1.30252,2.17313 -2.76855,3.7288 -4.82839,5.20394 -1.57695,1.12932 -3.41671,2.05205 -5.31124,2.46785 -1.0137,0.22248 -3.37988,0.37554 -3.37988,0.37554 0,0 -4.1964,2.47777 -6.54516,2.89704 -2.22265,0.39676 -4.70226,0.5005 -6.75975,-0.4292 -1.42889,-0.64566 -2.36665,-2.08613 -3.32623,-3.32622 -1.2951,-1.67368 -1.72252,-3.97578 -3.21893,-5.47219 -1.63514,-1.63514 -3.43353,-1.39487 -3.43353,-1.39487 v -15.98735 l 37.44689,-4.39921 z"
                    transform="translate(-30.59825,-80.713896)"
                />
                <path
                    className={classNames(styles.filled, styles.outlined)}
                    d="m 47.245317,16.021528 -1.820902,10.090836 0.151741,5.91793 H 95.04781 v -6.14555 l -1.82472,-9.979718 z"
                />
                <ellipse
                    className={classNames(styles.filled, styles.outlined)}
                    cx="83.071182"
                    cy="21.600992"
                    rx="2.6191764"
                    ry="2.5394299"
                />
                <Joystick x={-30.59825} y={-80.713896} />
                <Joystick x={-88.7521} y={-81.8651694} />
                <ShoulderButton
                    side="left"
                    pressed={leftBumperButton.pressed}
                />
                <TriggerButton side="left" pressed={leftTrigger.pressed} />
                <path
                    className={classNames(styles.filled, styles.outlined)}
                    d="m 65.511748,26.691084 h 9.458472 v 1.82406 l -1.44852,1.44852 h -6.908246 l -1.099801,-1.0998 z"
                />
                <path
                    className={classNames(styles.filled, styles.outlined)}
                    d="m 23.877071,13.517788 c 0,0 -0.20774,-1.123382 -0.0569,-1.384644 0.243658,-0.422028 1.003354,-0.799298 1.593289,-1.024258 1.357791,-0.517767 2.833762,-0.594102 4.286707,-0.569031 0.986954,0.01703 1.896773,0.455226 1.896773,0.455226 l 0.132771,1.953675 z"
                />
                <path
                    className={classNames(styles.filled, styles.outlined)}
                    d="m 14.520428,16.766053 c 0,0 -0.166221,-1.2873 0,-1.609465 0.28618,-0.554667 1.549159,-1.255562 2.414198,-1.716764 1.342432,-0.715729 2.871619,-1.118831 4.37238,-1.368046 0.952797,-0.158221 2.148914,-0.23846 2.521495,0.134121 0.358807,0.358807 0.24142,1.341222 0.24142,1.341222 z"
                />
                <path
                    className={classNames(styles.filled, styles.outlined)}
                    d="m 78.27652,11.734822 c 0,0 -0.10541,-0.824906 0.0694,-1.175999 0.11727,-0.235548 0.28745,-0.373606 0.5376,-0.455227 0.64808,-0.2114605 3.76699,-0.1084925 4.4894,0.08508 0.42684,0.114372 0.89844,0.43053 1.31472,0.578794 0.32301,0.115041 1.09065,0.09484 1.09065,0.09484 0,0 -0.008,-0.348849 0.0853,-0.493162 0.14626,-0.225575 0.52543,-0.4001775 0.77768,-0.4931605 0.45486,-0.167669 5.09221,-0.139836 5.74723,0.03794 0.22565,0.06124 0.50397,0.1451135 0.62643,0.3507205 0.0495,0.08315 0.067,0.680568 0.067,0.680568 0,0 1.16265,0.02558 1.74045,-0.02737 0.96928,-0.08882 1.04023,-0.461328 2.87939,-0.485476 l -0.0143,1.150716 z"
                />
                <path
                    className={classNames(styles.filled, styles.outlined)}
                    d="m 38.286864,16.175916 c 20.167296,-0.434022 40.354486,-0.652556 60.515896,0 6.08081,0.196815 11.91139,-0.202301 18.21378,1.180272 3.61891,0.793889 6.93677,1.655987 9.52267,3.862726 2.93247,2.50249 3.92343,7.81868 3.92343,7.81868 0,0 2.84854,-1.17905 4.83435,-0.36419 2.19029,0.89876 3.8497,3.90985 3.8497,3.90985 0,0 -0.49075,-4.27339 -1.28757,-6.16041 -0.67721,-1.60379 -1.73978,-3.04498 -2.89704,-4.34556 -0.93611,-1.05204 -2.07104,-1.92035 -3.21893,-2.73609 -1.35252,-0.961167 -2.81611,-1.76309 -4.29191,-2.521494 -1.09656,-0.563517 -3.37987,-1.502166 -3.37987,-1.502166 0,0 -2.4445,-4.087962 -3.23168,-4.594834 -0.84168,-0.541972 -2.95611,-0.689066 -4.49376,-0.8237005 -4.68529,-0.4102394 -9.4124,-0.237013 -14.10964,0 -1.31552,0.06638 -2.32203,-0.0335 -3.93152,0.3977655 -1.12103,0.300379 -2.56966,0.978696 -2.56966,0.978696 l -31.053013,0.125708 c 0,0 -1.046593,-0.01967 -2.092307,-0.751084 -0.783752,-0.548191 -0.473937,-0.8408295 -1.15833,-1.2022179 -0.593421,-0.313352 -2.521065,-0.398235 -3.83101,-0.460897 -3.947618,-0.188836 -7.912661,-0.257503 -11.856395,0 -1.097864,0.07168 -3.272581,0.429191 -3.272581,0.429191 l -0.751083,1.2339239 -2.199603,0.91203 c 0,0 -7.419424,0.162413 -10.62247,0.590137 -3.203046,0.427724 -5.776455,0.945881 -8.557782,1.824061 -2.399066,0.757484 -4.717064,1.785413 -6.946735,2.950686 -1.765798,0.922843 -3.8094134,2.026969 -5.8937474,3.615585 -1.666928,1.27048 -3.444766,3.72768 -4.362386,5.61202 -0.803428,1.64985 -1.600262,5.31123 -1.600262,5.31123 0,0 1.606121,-1.60636 3.218932,-2.46784 0.932787,-0.49824 1.948597,-0.95803 3.004335,-1.01933 0.766842,-0.0445 2.2532504,0.48284 2.2532504,0.48284 0,0 0.818635,-3.57548 2.414199,-5.52584 1.479595,-1.80861 3.616021,-3.05044 5.740426,-4.023657 2.783889,-1.275342 5.875918,-1.809518 8.905708,-2.253253 3.701512,-0.542114 7.472474,-0.402346 11.212608,-0.482838 z"
                />
                <path
                    className={classNames(styles.filled, styles.outlined)}
                    d="m 35.507121,11.669413 c 0,0 -0.204758,-0.648616 0.120707,-1.086391 0.462892,-0.6226225 1.688523,-0.7522175 2.695856,-0.8986165 1.101367,-0.1600664 2.427035,-0.2366974 3.784938,-0.115154 0.699891,0.06265 1.765985,0.105415 2.142306,0.5263285 0.322816,0.361069 0.296023,1.332414 0.296023,1.332414 z"
                />
                <path
                    className={classNames(styles.filled, styles.outlined)}
                    d="m 27.82534,12.30097 c 0,0 -0.214612,-0.561131 -0.02682,-0.886389 0.258734,-0.44814 0.819163,-0.603169 1.99842,-0.952268 1.393402,-0.412493 2.771594,-0.4679725 4.18461,-0.295067 1.38138,0.169034 1.501845,0.227684 1.904534,0.630373 0.254635,0.254635 0.228007,0.861471 0.228007,0.861471 z"
                />
                <path
                    className={classNames(styles.filled, styles.outlined)}
                    d="m 39.658223,32.030294 h 60.696737 c 0,0 0.37873,10.35107 0.15174,11.9876 -0.4272,3.07995 -1.12505,3.79355 -1.12505,3.79355 H 40.872158 c 0,0 -0.5923,-1.03326 -0.91045,-3.03483 -0.667158,-4.19729 -0.303485,-12.74632 -0.303485,-12.74632 z"
                />
                <TriggerButton side="right" pressed={rightTrigger.pressed} />
                <ShoulderButton
                    side="right"
                    pressed={rightBumperButton.pressed}
                />
            </g>
        </svg>
    );
};

const ShoulderButton = ({ side, pressed }) => {
    if (side === "left") {
        return (
            <g
                transform="translate(-30.59825,-80.713896)"
                className={classNames(styles.filled, styles.outlined, {
                    [styles.pressed]: pressed,
                })}
            >
                <path d="m 125.62328,112.72522 c 0,0 4.30027,-0.20251 6.37316,0.0379 1.04091,0.12074 2.19203,0.12836 3.12967,0.68283 0.58138,0.3438 1.32774,1.19497 1.32774,1.19497 l 1.13807,-0.18968 -0.11381,-2.80722 -11.8738,-0.45523 z" />
                <path d="M 125.63537,106.63329 123.814,96.76874 c 0,0 11.69156,-0.06462 17.24978,0.53605 2.66288,0.287774 6.30614,0.490708 8.89326,1.183926 2.65309,0.710894 4.41004,1.349478 6.67265,3.096034 1.36016,1.04993 2.54369,2.71201 3.27956,4.20871 0.49021,0.99706 1.1743,4.04757 1.1743,4.04757 l -13.16427,2.8062 z" />
                <path d="m 125.55029,106.6398 c 0,0 9.04697,0.26965 13.79161,1.22113 2.29553,0.46036 3.82629,0.49138 6.70306,2.26228 0.84461,0.51993 1.87432,2.52402 1.87432,2.52402 l -10.41032,1.81004 c 0,0 -1.10659,-1.29709 -1.91007,-1.72528 -0.99663,-0.53112 -2.52354,-0.72909 -3.64756,-0.83837 -2.02909,-0.19727 -6.34894,-0.0802 -6.34894,-0.0802 z" />
            </g>
        );
    } else {
        return (
            <g
                transform="translate(-151.13493,-80.811989)"
                className={classNames(styles.filled, styles.outlined, {
                    [styles.pressed]: pressed,
                })}
            >
                <path d="m 196.54382,112.72522 c 0,0 -4.30027,-0.20251 -6.37316,0.0379 -1.04091,0.12074 -2.19203,0.12836 -3.12967,0.68283 -0.58138,0.3438 -1.32774,1.19497 -1.32774,1.19497 l -1.13807,-0.18968 0.11381,-2.80722 11.8738,-0.45523 z" />
                <path d="m 196.53173,106.63329 1.82137,-9.86455 c 0,0 -11.69156,-0.06462 -17.24978,0.53605 -2.66288,0.287774 -6.30614,0.490708 -8.89326,1.183926 -2.65309,0.710894 -4.41004,1.349478 -6.67265,3.096034 -1.36016,1.04993 -2.54369,2.71201 -3.27956,4.20871 -0.49021,0.99706 -1.1743,4.04757 -1.1743,4.04757 l 13.16427,2.8062 z" />
                <path d="m 196.61681,106.6398 c 0,0 -9.04697,0.26965 -13.79161,1.22113 -2.29553,0.46036 -3.82629,0.49138 -6.70306,2.26228 -0.84461,0.51993 -1.87432,2.52402 -1.87432,2.52402 l 10.41032,1.81004 c 0,0 1.10659,-1.29709 1.91007,-1.72528 0.99663,-0.53112 2.52354,-0.72909 3.64756,-0.83837 2.02909,-0.19727 6.34894,-0.0802 6.34894,-0.0802 z" />
            </g>
        );
    }
};

ShoulderButton.propTypes = {
    side: PropTypes.string.isRequired,
};

const TriggerButton = ({ side, pressed }) => {
    if (side === "left") {
        return (
            <g
                transform="translate(-30.59825,-80.713896)"
                className={classNames(styles.filled, styles.outlined, {
                    [styles.pressed]: pressed,
                })}
            >
                <path d="m 136.34885,114.63749 c 0,0 2.40927,16.42889 2.99848,18.62784 0.28193,1.05219 0.85072,2.09635 1.72828,2.77352 0.79531,0.6137 2.97654,1.16616 5.66407,0.99205 2.99269,-0.19389 4.98224,-1.18229 6.83211,-2.7601 2.17713,-1.85694 2.98118,-4.72132 3.91715,-7.27834 1.33667,-3.65168 2.74207,-7.5531 3.12588,-11.37777 0.20959,-2.08857 0.48838,-5.79183 0.48838,-5.79183 0,0 -4.23174,0.76379 -6.18018,1.18097 -2.06333,0.44178 -7.00494,1.59062 -7.00494,1.59062 l -10.49055,1.88975 z" />
                <path d="m 137.48122,114.37691 10.4369,-1.78246 c 0,0 0.91209,5.0993 2.08168,10.34958 1.12746,5.06116 2.84182,10.21443 2.15603,10.90022 -0.63763,0.63763 -4.88413,1.88123 -6.21851,1.88123 -1.48762,0 -2.91088,0.0176 -3.84101,-1.14341 -1.53328,-1.91384 -4.61509,-20.20516 -4.61509,-20.20516 z" />
            </g>
        );
    } else {
        return (
            <g
                transform="translate(-151.27101,-80.914549)"
                className={classNames(styles.filled, styles.outlined, {
                    [styles.pressed]: pressed,
                })}
            >
                <path d="m 185.85755,114.63749 c 0,0 -2.40927,16.42889 -2.99848,18.62784 -0.28193,1.05219 -0.85072,2.09635 -1.72828,2.77352 -0.79531,0.6137 -2.97654,1.16616 -5.66407,0.99205 -2.99269,-0.19389 -4.98224,-1.18229 -6.83211,-2.7601 -2.17713,-1.85694 -2.98118,-4.72132 -3.91715,-7.27834 -1.33667,-3.65168 -2.74207,-7.5531 -3.12588,-11.37777 -0.20959,-2.08857 -0.48838,-5.79183 -0.48838,-5.79183 0,0 4.23174,0.76379 6.18018,1.18097 2.06333,0.44178 7.00494,1.59062 7.00494,1.59062 l 10.49055,1.88975 z" />
                <path d="m 184.72518,114.37691 -10.4369,-1.78246 c 0,0 -0.91209,5.0993 -2.08168,10.34958 -1.12746,5.06116 -2.84182,10.21443 -2.15603,10.90022 0.63763,0.63763 4.88413,1.88123 6.21851,1.88123 1.48762,0 2.91088,0.0176 3.84101,-1.14341 1.53328,-1.91384 4.61509,-20.20516 4.61509,-20.20516 z" />
            </g>
        );
    }
};

const Joystick = ({ x, y }) => {
    return (
        <g
            transform={`translate(${x},${y})`}
            className={classNames(styles.filled, styles.outlined)}
        >
            <path d="m 135.16657,86.511065 0.0572,4.973229 c 0,0 -2.15178,0.321423 -3.72764,1.870232 h 17.61051 c -2.03579,-1.731053 -4.32954,-1.856965 -4.32954,-1.856965 l -0.073,-4.988742 z" />
            <path d="m 133.6403,82.447572 12.69187,-0.113793 c 0,0 2.11221,0.509467 2.17446,2.361412 0.0623,1.851946 -2.0784,2.269873 -2.0784,2.269873 h -12.8105 c 0,0 -2.17898,0.05102 -2.17898,-2.154005 0,-2.205026 2.20155,-2.363487 2.20155,-2.363487 z" />
        </g>
    );
};