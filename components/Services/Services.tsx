import styles from "../../styles/services.module.scss";
import React from "react";
import Link from "next/link";


const Services = () => {
    return (
        <div className="sub-container">
            <div className={styles.servicesContainer}>
                <Link href="/equipment" className={styles.services__link}>
                    <svg className={styles.icon} width={50} height={50}
                         viewBox="0 0 512 512">
                        <path
                            d="M390 30C390 21.7667 387.083 14.7167 381.25 8.85C375.383 2.95 368.3 0 360 0L140 0.05C131.767 0.05 124.717 2.96667 118.85 8.8V8.85C112.95 14.6833 110 21.75 110 30.05L110.05 470.05C110.05 478.283 112.967 485.35 118.8 491.25L118.85 491.3C124.683 497.133 131.75 500.05 140.05 500.05L360.05 500C368.283 500 375.35 497.083 381.25 491.25H381.3C387.133 485.383 390.05 478.3 390.05 470L390 30ZM367.05 22.95L367.1 23C369.033 24.9333 370 27.2667 370 30L370.05 470C370.05 472.767 369.083 475.117 367.15 477.05V477.1C365.15 479.033 362.783 480 360.05 480L140.05 480.05C137.283 480.05 134.933 479.083 133 477.15C131.033 475.15 130.05 472.783 130.05 470.05L130 30.05C130 27.2833 130.983 24.9333 132.95 23H133C134.933 21.0333 137.267 20.05 140 20.05L360 20C362.767 20 365.117 20.9833 367.05 22.95ZM342.25 321.1H342.2C337.133 309.133 330 298.55 320.8 289.35C311.567 280.117 300.967 272.967 289 267.9C276.567 262.667 263.583 260.05 250.05 260.05C236.45 260.05 223.467 262.667 211.1 267.9C199.133 272.967 188.55 280.117 179.35 289.35C170.117 298.55 162.967 309.133 157.9 321.1C152.667 333.467 150.05 346.433 150.05 360C150.05 373.6 152.667 386.583 157.9 398.95C162.967 410.917 170.117 421.517 179.35 430.75C188.55 439.95 199.133 447.083 211.1 452.15V452.2C223.467 457.4 236.45 460 250.05 460C263.583 460 276.567 457.4 289 452.2V452.15C300.967 447.083 311.567 439.95 320.8 430.75C330 421.517 337.133 410.917 342.2 398.95H342.25C347.45 386.583 350.05 373.6 350.05 360C350.05 346.433 347.45 333.467 342.25 321.1ZM281.25 286.35L281.2 286.3C290.767 290.367 299.25 296.1 306.65 303.5C314.017 310.867 319.733 319.333 323.8 328.9C327.967 338.8 330.05 349.167 330.05 360C330.05 370.867 327.967 381.25 323.8 391.15C319.733 400.717 314.017 409.2 306.65 416.6C299.25 423.967 290.767 429.683 281.2 433.75H281.25C271.317 437.917 260.917 440 250.05 440C239.183 440 228.8 437.917 218.9 433.75C209.333 429.683 200.867 423.967 193.5 416.6C186.1 409.2 180.367 400.717 176.3 391.15H176.35C172.15 381.25 170.05 370.867 170.05 360C170.05 349.167 172.15 338.8 176.35 328.9H176.3C180.367 319.333 186.1 310.867 193.5 303.5C200.867 296.1 209.333 290.367 218.9 286.3V286.35C228.8 282.15 239.183 280.05 250.05 280.05C260.917 280.05 271.317 282.15 281.25 286.35ZM207.65 317.65C195.917 329.317 190.05 343.433 190.05 360C190.05 376.6 195.917 390.733 207.65 402.4V402.45C219.317 414.15 233.45 420 250.05 420C266.617 420 280.767 414.15 292.5 402.45H292.45C304.183 390.75 310.05 376.6 310.05 360C310.05 343.433 304.183 329.317 292.45 317.65H292.5C280.767 305.917 266.617 300.05 250.05 300.05C233.45 300.05 219.317 305.917 207.65 317.65ZM221.75 331.8L221.8 331.75C229.567 323.95 238.983 320.05 250.05 320.05C261.083 320.05 270.517 323.967 278.35 331.8C286.15 339.567 290.05 348.967 290.05 360C290.05 371.067 286.15 380.5 278.35 388.3C270.517 396.1 261.083 400 250.05 400C238.983 400 229.567 396.1 221.8 388.3H221.75C213.95 380.5 210.05 371.067 210.05 360C210.05 348.967 213.95 339.567 221.75 331.8ZM342.25 101.1H342.2C337.133 89.1333 330 78.55 320.8 69.35C311.567 60.1167 300.967 52.9667 289 47.9C276.567 42.6667 263.583 40.05 250.05 40.05C236.45 40.05 223.467 42.6667 211.1 47.9C199.133 52.9667 188.55 60.1167 179.35 69.35C170.117 78.55 162.967 89.1333 157.9 101.1C152.667 113.467 150.05 126.45 150.05 140.05C150.05 153.583 152.667 166.567 157.9 179C162.967 190.967 170.117 201.567 179.35 210.8C188.55 220 199.133 227.133 211.1 232.2V232.25C223.467 237.45 236.45 240.05 250.05 240.05C263.583 240.05 276.567 237.45 289 232.25V232.2C300.967 227.133 311.567 220 320.8 210.8C330 201.567 337.133 190.967 342.2 179H342.25C347.45 166.567 350.05 153.583 350.05 140.05C350.05 126.45 347.45 113.467 342.25 101.1ZM281.25 66.35L281.2 66.3C290.767 70.3667 299.25 76.1 306.65 83.5C314.017 90.8667 319.733 99.3333 323.8 108.9C327.967 118.8 330.05 129.183 330.05 140.05C330.05 150.917 327.967 161.317 323.8 171.25V171.2C319.733 180.767 314.017 189.25 306.65 196.65C299.25 204.017 290.767 209.733 281.2 213.8H281.25C271.317 217.967 260.917 220.05 250.05 220.05C239.183 220.05 228.8 217.967 218.9 213.8C209.333 209.733 200.867 204.017 193.5 196.65C186.1 189.25 180.367 180.767 176.3 171.2L176.35 171.25C172.15 161.317 170.05 150.917 170.05 140.05C170.05 129.183 172.15 118.8 176.35 108.9H176.3C180.367 99.3333 186.1 90.8667 193.5 83.5C200.867 76.1 209.333 70.3667 218.9 66.3V66.35C228.8 62.15 239.183 60.05 250.05 60.05C260.917 60.05 271.317 62.15 281.25 66.35ZM292.45 97.65H292.5C280.767 85.9167 266.617 80.05 250.05 80.05C233.45 80.05 219.317 85.9167 207.65 97.65C195.917 109.317 190.05 123.45 190.05 140.05C190.05 156.617 195.917 170.767 207.65 182.5V182.45C219.317 194.183 233.45 200.05 250.05 200.05C266.617 200.05 280.767 194.2 292.5 182.5C304.2 170.767 310.05 156.617 310.05 140.05C310.05 123.45 304.183 109.317 292.45 97.65ZM221.75 111.8L221.8 111.75C229.567 103.95 238.983 100.05 250.05 100.05C261.083 100.05 270.517 103.967 278.35 111.8C286.15 119.567 290.05 128.983 290.05 140.05C290.05 151.083 286.15 160.517 278.35 168.35C270.517 176.15 261.083 180.05 250.05 180.05C238.983 180.05 229.567 176.15 221.8 168.35C213.967 160.517 210.05 151.083 210.05 140.05C210.05 128.983 213.95 119.567 221.75 111.8Z"/>
                    </svg>
                </Link>
                <Link href="/karaoke" className={styles.services__link}>
                    <svg className={styles.icon} width={50} height={50}
                         viewBox="0 0 512 512">
                        <path
                            d="M470.35 122.1V122.15C465.327 109.699 458.011 98.666 448.4 89.05C438.82 79.472 427.786 72.1553 415.3 67.1C403.275 62.2307 390.742 59.7974 377.7 59.8C364.659 59.7974 352.109 62.2307 340.05 67.1H340.1C327.693 72.1234 316.709 79.3901 307.15 88.9L306.8 89.25C297.291 98.8116 290.024 109.778 285 122.15V122.1C280.131 134.158 277.698 146.708 277.7 159.75C277.7 160.481 277.7 161.197 277.7 161.9L106.65 358.3C101.459 364.267 99.0088 371.167 99.3001 379V379.05C99.5626 386.953 102.479 393.67 108.05 399.2L116.1 407.25L109 414.3C105.104 418.232 100.387 420.199 94.8501 420.2C89.3427 420.195 84.626 418.229 80.7001 414.3L39.4001 373C37.4628 371.065 35.1129 370.099 32.3501 370.1C29.5873 370.099 27.2207 371.065 25.2501 373C23.3155 374.971 22.3488 377.337 22.3501 380.1C22.3488 382.863 23.3155 385.213 25.2501 387.15L66.5501 428.45C74.3909 436.288 83.8242 440.205 94.8501 440.2C105.901 440.201 115.335 436.301 123.15 428.5L130.2 421.4L138.25 429.45C143.837 434.984 150.537 437.901 158.35 438.2H158.4C166.296 438.44 173.213 435.99 179.15 430.85L375.6 259.7C376.306 259.732 377.006 259.749 377.7 259.75C390.742 259.752 403.275 257.302 415.3 252.4C427.786 247.378 438.82 240.061 448.4 230.45C458.011 220.87 465.328 209.836 470.35 197.35C475.253 185.325 477.703 172.791 477.7 159.75C477.703 146.708 475.253 134.158 470.35 122.1ZM407.75 85.65H407.8C417.781 89.6945 426.597 95.5445 434.25 103.2C441.939 110.884 447.789 119.701 451.8 129.65C455.731 139.292 457.698 149.325 457.7 159.75C457.698 170.175 455.731 180.192 451.8 189.8V189.85C449.044 196.72 445.411 203.037 440.9 208.8L328.6 96.55C334.399 92.0716 340.732 88.4383 347.6 85.65C357.242 81.7525 367.275 79.8025 377.7 79.8C388.125 79.8025 398.142 81.7525 407.75 85.65ZM303.55 129.65C306.338 122.804 309.971 116.487 314.45 110.7L426.75 222.95C420.987 227.461 414.67 231.094 407.8 233.85H407.75C398.142 237.781 388.125 239.747 377.7 239.75C376.156 239.753 374.606 239.72 373.05 239.65C372.932 239.642 372.798 239.626 372.65 239.6C372.567 239.608 372.483 239.608 372.4 239.6C363.855 239.017 355.589 237.101 347.6 233.85C337.619 229.839 328.786 223.989 321.1 216.3C313.445 208.647 307.595 199.83 303.55 189.85C300.337 181.87 298.453 173.62 297.9 165.1C297.892 165.033 297.875 164.95 297.85 164.85C297.869 164.842 297.869 164.825 297.85 164.8C297.857 164.662 297.857 164.529 297.85 164.4C297.75 162.856 297.7 161.306 297.7 159.75C297.703 149.325 299.653 139.292 303.55 129.65ZM281.7 187.85C282.649 191.046 283.749 194.212 285 197.35C290.055 209.836 297.372 220.87 306.95 230.45C316.564 240.061 327.614 247.378 340.1 252.4C343.261 253.694 346.461 254.811 349.7 255.75L166 415.75H166.05C164.066 417.466 161.75 418.282 159.1 418.2C156.504 418.1 154.27 417.133 152.4 415.3L122.2 385.05C120.349 383.213 119.382 380.98 119.3 378.35V378.3C119.202 375.72 120.002 373.437 121.7 371.45H121.75L281.7 187.85ZM292.85 244.6C286.958 238.76 279.891 235.843 271.65 235.85C263.351 235.852 256.267 238.769 250.4 244.6C244.569 250.467 241.652 257.551 241.65 265.85C241.646 274.098 244.563 281.148 250.4 287C256.269 292.904 263.352 295.854 271.65 295.85C279.902 295.862 286.968 292.912 292.85 287C298.721 281.16 301.654 274.11 301.65 265.85C301.648 257.551 298.715 250.467 292.85 244.6ZM278.7 258.75L278.75 258.8C280.685 260.744 281.652 263.094 281.65 265.85C281.646 268.59 280.663 270.923 278.7 272.85C276.748 274.838 274.398 275.838 271.65 275.85C268.893 275.846 266.543 274.863 264.6 272.9L264.55 272.85C262.621 270.923 261.654 268.59 261.65 265.85C261.648 263.083 262.615 260.716 264.55 258.75C266.516 256.815 268.883 255.848 271.65 255.85C274.397 255.857 276.747 256.823 278.7 258.75Z"/>
                    </svg>
                </Link>
                <Link href="/projector" className={styles.services__link}>
                    <svg className={styles.icon} width={50} height={50}
                         viewBox="0 0 512 512">
                        <path
                            d="M361.3 148.8L361.25 148.75C355.35 142.917 348.283 140 340.05 140H280V109.95C280 101.683 277.083 94.6333 271.25 88.8C265.383 82.9333 258.317 80 250.05 80H250C241.733 80 234.683 82.9333 228.85 88.8C222.983 94.6333 220.05 101.683 220.05 109.95V140H160.05C151.75 140 144.683 142.933 138.85 148.8C132.983 154.633 130.05 161.7 130.05 170V199.95H50C41.7667 199.95 34.7167 202.883 28.85 208.75L28.8 208.8C22.9334 214.633 20 221.7 20 230L20.05 350C20.05 358.233 22.9667 365.3 28.8 371.2L28.85 371.25C31.5167 373.917 34.4667 375.983 37.7 377.45C41.4667 379.15 45.5834 380 50.05 380H275.8C279.367 385.167 283.55 390 288.35 394.5H288.4C296.8 402.433 306.317 408.617 316.95 413.05C327.783 417.55 338.783 419.867 349.95 420C365.95 420.167 381.183 415.95 395.65 407.35C407.65 400.183 417.417 391.033 424.95 379.9L450.05 379.95C454.45 379.95 458.533 379.117 462.3 377.45C465.533 375.983 468.517 373.9 471.25 371.2H471.3C477.133 365.333 480.05 358.25 480.05 349.95L480 229.95C480 221.717 477.083 214.667 471.25 208.8C465.383 202.9 458.3 199.95 450 199.95H370.05V170C370.05 161.7 367.133 154.633 361.3 148.8ZM347.15 162.95C349.083 164.883 350.05 167.233 350.05 170V199.95H150.05V170C150.05 167.233 151.033 164.883 153 162.95C154.933 160.983 157.283 160 160.05 160H340.05C342.783 160 345.15 160.983 347.15 162.95ZM457.05 222.9L457.1 222.95C459.033 224.883 460 227.217 460 229.95L460.05 349.95C460.05 352.717 459.083 355.067 457.15 357V357.05C455.183 358.95 452.817 359.917 450.05 359.95L434.9 359.9C435.033 359.467 435.183 359.05 435.35 358.65V358.6C438.483 349.167 440.05 339.633 440.05 330C440.05 317.767 437.683 306.083 432.95 294.95L433 295C428.433 284.233 422 274.7 413.7 266.4H413.65C405.35 258.067 395.833 251.633 385.1 247.1C373.933 242.367 362.25 240 350.05 240C337.817 240 326.133 242.367 315 247.1H315.05C304.283 251.633 294.75 258.067 286.45 266.4C278.117 274.7 271.683 284.233 267.15 295V294.95C262.417 306.083 260.05 317.767 260.05 330C260.05 340.433 261.817 350.433 265.35 360H50.05C47.2834 360 44.9333 359.033 43 357.1C41.0333 355.1 40.05 352.733 40.05 350L40 230C40 227.233 40.9833 224.883 42.95 222.95L43 222.9C44.9333 220.933 47.2667 219.95 50 219.95H450C452.767 219.95 455.117 220.933 457.05 222.9ZM377.3 265.5L377.35 265.55C385.683 269.05 393.083 274.033 399.55 280.5V280.55C406.017 286.983 411.017 294.383 414.55 302.75C418.217 311.417 420.05 320.5 420.05 330C420.05 337.5 418.833 344.933 416.4 352.3C414.867 356.8 413.067 360.817 411 364.35L410.95 364.5C410.817 364.667 410.717 364.85 410.65 365.05C410.583 365.15 410.517 365.25 410.45 365.35C407.817 369.75 404.767 373.783 401.3 377.45C396.733 382.317 391.433 386.55 385.4 390.15C374.233 396.817 362.5 400.1 350.2 400H350.15C341.517 399.867 333.017 398.067 324.65 394.6C316.25 391.067 308.717 386.183 302.05 379.95V379.9C301.183 379.1 300.35 378.283 299.55 377.45C295.917 373.75 292.783 369.767 290.15 365.5C289.917 365.033 289.65 364.6 289.35 364.2C288.15 362.133 287.05 360.017 286.05 357.85C282.05 349.05 280.05 339.767 280.05 330C280.05 320.5 281.883 311.417 285.55 302.75H285.6C289.1 294.383 294.083 286.983 300.55 280.55L300.6 280.5C307.033 274.033 314.433 269.05 322.8 265.55V265.5C331.467 261.833 340.55 260 350.05 260C359.517 260 368.6 261.833 377.3 265.5ZM243 102.95C244.933 100.983 247.267 100 250 100H250.05C252.783 100 255.133 100.983 257.1 102.95C259.033 104.883 260 107.217 260 109.95V140H240.05V109.95C240.05 107.217 241.033 104.883 243 102.95ZM400 329.95C400 316.15 395.133 304.383 385.4 294.65C375.6 284.85 363.8 279.95 350 279.95C336.2 279.95 324.433 284.85 314.7 294.65C304.9 304.383 300 316.15 300 329.95C300 343.75 304.9 355.55 314.7 365.35C320.4 371.05 326.817 375.083 333.95 377.45C338.95 379.117 344.3 379.95 350 379.95C355.733 379.95 361.1 379.117 366.1 377.45C373.233 375.083 379.667 371.05 385.4 365.35C395.133 355.583 400 343.783 400 329.95ZM350 299.95C358.267 299.95 365.35 302.9 371.25 308.8C377.083 314.633 380 321.683 380 329.95C380 338.25 377.083 345.333 371.25 351.2C365.383 357.033 358.3 359.95 350 359.95C341.733 359.95 334.683 357.033 328.85 351.2C322.95 345.3 320 338.217 320 329.95C320 321.683 322.933 314.633 328.8 308.8L328.85 308.75C334.683 302.883 341.733 299.95 350 299.95ZM63 322.95C61.0333 324.883 60.05 327.233 60.05 330C60.05 332.767 61.0333 335.133 63 337.1C64.9333 339.033 67.2834 340 70.05 340H160.05C162.817 340 165.183 339.033 167.15 337.1C169.083 335.133 170.05 332.767 170.05 330C170.05 327.233 169.083 324.883 167.15 322.95C165.183 320.983 162.817 320 160.05 320H70.05C67.2834 320 64.9333 320.983 63 322.95ZM167.15 282.95C165.183 280.983 162.817 280 160.05 280H70.05C67.2834 280 64.9333 280.983 63 282.95C61.0333 284.883 60.05 287.233 60.05 290C60.05 292.767 61.0333 295.133 63 297.1C64.9333 299.033 67.2834 300 70.05 300H160.05C162.817 300 165.183 299.033 167.15 297.1C169.083 295.133 170.05 292.767 170.05 290C170.05 287.233 169.083 284.883 167.15 282.95ZM167.1 242.95C165.133 240.983 162.767 240 160 240H70C67.2333 240 64.8833 240.983 62.95 242.95C60.9833 244.883 60 247.233 60 250C60 252.767 60.9833 255.133 62.95 257.1C64.8833 259.033 67.2333 260 70 260H160C162.767 260 165.133 259.033 167.1 257.1C169.033 255.133 170 252.767 170 250C170 247.233 169.033 244.883 167.1 242.95Z"/>
                    </svg>
                </Link>
                <Link href="/hookah" className={styles.services__link}>
                    <svg className={styles.icon} width={50} height={50}
                         viewBox="0 0 512 512">
                        <path
                            d="M231.25 8.8C225.35 2.86667 218.267 -0.0666542 210 1.24829e-05H189.4C181.1 1.24829e-05 174.033 2.93333 168.2 8.8C162.333 14.6333 159.4 21.6833 159.4 29.95V30C159.4 38.2333 162.317 45.3 168.15 51.2L168.2 51.25C170.433 53.4833 172.867 55.3 175.5 56.7L170.3 77.55C170.1 78.3833 170 79.2 170 80H159.95C151.683 80 144.633 82.9333 138.8 88.8C132.933 94.6333 130 101.683 130 109.95V110C130 118.233 132.917 125.3 138.75 131.2L138.8 131.25C144.633 137.083 151.683 140 159.95 140H169.95V170C168.117 171.4 166.35 172.95 164.65 174.65C154.883 184.45 150 196.233 150 210C150 223.8 154.883 235.583 164.65 245.35C166.35 247.05 168.133 248.617 170 250.05V285.15C168.3 285.75 166.617 286.4 164.95 287.1H165C154.233 291.633 144.7 298.067 136.4 306.4C128.067 314.7 121.633 324.233 117.1 335V334.95C112.367 346.083 110 357.767 110 370C110 382.2 112.367 393.883 117.1 405.05C121.633 415.783 128.067 425.3 136.4 433.6V433.65C138.667 435.883 141.017 438 143.45 440H119.95C111.683 440 104.633 442.933 98.8 448.8C92.9333 454.633 90 461.683 90 469.95V470C90 478.233 92.9167 485.3 98.75 491.2L98.8 491.25C104.633 497.083 111.683 500 119.95 500H280C288.233 500 295.3 497.083 301.2 491.25L301.25 491.2C307.083 485.3 310 478.233 310 470V469.95C310 461.683 307.083 454.633 301.25 448.8L301.2 448.75C295.3 442.917 288.233 440 280 440H256.55C258.983 438 261.333 435.883 263.6 433.65L263.65 433.6C271.95 425.3 278.383 415.783 282.95 405.05H282.9C287.633 393.883 290 382.2 290 370C290 357.767 287.633 346.083 282.9 334.95L282.95 335C278.383 324.233 271.95 314.7 263.65 306.4H263.6C255.3 298.067 245.783 291.633 235.05 287.1C233.383 286.4 231.7 285.75 230 285.15V250C231.833 248.6 233.6 247.05 235.3 245.35L235.35 245.3C242.483 238.2 247.017 230.017 248.95 220.75C258.95 222.417 267.75 227.05 275.35 234.65C285.117 244.417 290 256.2 290 270C290 270.467 290.033 270.917 290.1 271.35C290.033 271.75 290 272.183 290 272.65V305C290 320.2 295.367 333.167 306.1 343.9C316.833 354.633 329.8 360 345 360C360.2 360 373.15 354.633 383.85 343.9L383.9 343.85C394.633 333.15 400 320.2 400 305V90C402.767 90 405.133 89.0333 407.1 87.1C409.033 85.1333 410 82.7667 410 80C410 77.2333 409.033 74.8833 407.1 72.95C405.133 70.9833 402.767 70 400 70C400 67.2333 399.033 64.8833 397.1 62.95C395.133 60.9833 392.767 60 390 60C387.233 60 384.883 60.9833 382.95 62.95C380.983 64.8833 380 67.2333 380 70C377.233 70 374.883 70.9833 372.95 72.95C370.983 74.8833 370 77.2333 370 80C370 82.7667 370.983 85.1333 372.95 87.1C374.883 89.0333 377.233 90 380 90V305C380 314.667 376.583 322.917 369.75 329.75C362.917 336.583 354.667 340 345 340C335.333 340 327.083 336.583 320.25 329.75C313.417 322.917 310 314.667 310 305V272.65C310 272.183 309.983 271.75 309.95 271.35C309.983 270.917 310 270.467 310 270C310 250.667 303.167 234.167 289.5 220.5C278.033 209.033 264.6 202.383 249.2 200.55C247.433 190.75 242.817 182.117 235.35 174.65C233.617 172.917 231.817 171.333 229.95 169.9V140H240C248.233 140 255.3 137.083 261.2 131.25L261.25 131.2C267.083 125.3 270 118.233 270 110V109.95C270 101.683 267.083 94.6333 261.25 88.8L261.2 88.75C255.3 82.9167 248.233 80 240 80H230.05C230.017 79.2 229.9 78.4 229.7 77.6L224.45 56.4C226.817 55.0667 229.067 53.35 231.2 51.25L231.25 51.2C237.083 45.3 240 38.2333 240 30V29.95C240 21.6833 237.083 14.6333 231.25 8.8ZM220 30C220 32.7667 219.017 35.1333 217.05 37.1L217.15 37.05C215.583 38.5833 213.783 39.5333 211.75 39.9C211.583 39.9 211.433 39.9167 211.3 39.95C210.867 39.9833 210.433 40 210 40H189.4C189.1 40 188.783 40 188.45 40C188.283 39.9667 188.1 39.95 187.9 39.95C185.767 39.6167 183.917 38.6667 182.35 37.1C180.383 35.1 179.4 32.7333 179.4 30V29.95C179.4 27.2167 180.383 24.8833 182.35 22.95C184.283 20.9833 186.633 20 189.4 20H210.05C212.783 20 215.133 20.9833 217.1 22.95C219.033 24.8833 220 27.2167 220 29.95V30ZM150 109.95C150 107.217 150.983 104.883 152.95 102.95C154.883 100.983 157.217 100 159.95 100H240C242.733 100 245.1 100.983 247.1 102.95C249.033 104.883 250 107.217 250 109.95V110C250 112.733 249.033 115.083 247.1 117.05L247.05 117.1C245.083 119.033 242.733 120 240 120H159.95C157.217 120 154.883 119.033 152.95 117.1C150.983 115.1 150 112.733 150 110V109.95ZM189.95 160.95V140H209.95V160.9C206.75 160.3 203.433 160 200 160C196.533 160 193.183 160.317 189.95 160.95ZM190.3 80L195.3 60H204.75L209.7 80H190.3ZM230 209.75V210.25C229.933 218.417 227 225.4 221.2 231.2C215.333 237.067 208.267 240 200 240C191.733 240 184.667 237.067 178.8 231.2C172.933 225.333 170 218.267 170 210C170 201.733 172.917 194.667 178.75 188.8L178.8 188.75C184.667 182.917 191.733 180 200 180C208.267 180 215.333 182.933 221.2 188.8C227 194.6 229.933 201.583 230 209.75ZM200 260C203.467 260 206.8 259.7 210 259.1V280.55C206.7 280.183 203.367 280 200 280C196.633 280 193.3 280.183 190 280.55V259.1C193.2 259.7 196.533 260 200 260ZM172.75 305.55V305.5C181.417 301.833 190.5 300 200 300C209.467 300 218.55 301.833 227.25 305.5L227.3 305.55C235.633 309.05 243.033 314.033 249.5 320.5V320.55C255.967 326.983 260.967 334.383 264.5 342.75C268.167 351.417 270 360.5 270 370C270 379.467 268.167 388.55 264.5 397.25V397.3C260.967 405.633 255.967 413.033 249.5 419.5C243.033 425.967 235.633 430.967 227.3 434.5H227.25C219.117 437.933 210.633 439.767 201.8 440H198.25C189.35 439.767 180.85 437.933 172.75 434.5C164.383 430.967 156.983 425.967 150.55 419.5H150.5C144.033 413.033 139.05 405.633 135.55 397.3L135.5 397.25C131.833 388.55 130 379.467 130 370C130 360.5 131.833 351.417 135.5 342.75H135.55C139.05 334.383 144.033 326.983 150.5 320.55L150.55 320.5C156.983 314.033 164.383 309.05 172.75 305.55ZM280 460C282.733 460 285.1 460.983 287.1 462.95C289.033 464.883 290 467.217 290 469.95V470C290 472.733 289.033 475.083 287.1 477.05L287.05 477.1C285.083 479.033 282.733 480 280 480H119.95C117.217 480 114.883 479.033 112.95 477.1C110.983 475.1 110 472.733 110 470V469.95C110 467.217 110.983 464.883 112.95 462.95C114.883 460.983 117.217 460 119.95 460H197.75C197.85 460 197.933 460 198 460H202.05C202.15 460 202.25 460 202.35 460H280ZM167.1 362.95C165.133 360.983 162.767 360 160 360C157.233 360 154.883 360.983 152.95 362.95C150.983 364.883 150 367.233 150 370C150 383.8 154.883 395.583 164.65 405.35C174.417 415.117 186.2 420 200 420C202.767 420 205.133 419.033 207.1 417.1C209.033 415.133 210 412.767 210 410C210 407.233 209.033 404.883 207.1 402.95C205.133 400.983 202.767 400 200 400C191.733 400 184.667 397.067 178.8 391.2C172.933 385.333 170 378.267 170 370C170 367.233 169.033 364.883 167.1 362.95Z"/>
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default Services;