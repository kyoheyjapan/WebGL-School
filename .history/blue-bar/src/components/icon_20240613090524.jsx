// = Icon.jsx ======================================================================
// ボタンコンポーネント・テキストリンクコンポーネント内で使用するアイコンを管理するコンポーネント
// ============================================================================
import clsx from "clsx"
import { Activity, Airplay, AlarmCheck } from "lucide-react"

const CircleIcon = ({ className, ...props }) => {
  return (
    <svg aria-hidden="true" aria-label="circle" viewBox="0 0 8 8" className={clsx("aspect-[1/1] fill-current group-hover:text-hov", className)} {...props} role="img">
      <circle cx="4" cy="4" r="4" />
    </svg>
  )
}
const CircleLineIcon = ({ className, ...props }) => {
  return (
    <svg aria-hidden="true" aria-label="circle" viewBox="0 0 8 8" className={clsx("aspect-[1/1] fill-current", className)} {...props} role="img">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 1.6C2.67452 1.6 1.6 2.67452 1.6 4C1.6 5.32548 2.67452 6.4 4 6.4C5.32548 6.4 6.4 5.32548 6.4 4C6.4 2.67452 5.32548 1.6 4 1.6ZM0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4Z"
      />
    </svg>
  )
}
const QuoteIcon = ({ className, ...props }) => {
  return (
    <svg aria-hidden="true" aria-label="circle" viewBox="0 0 20 16" className={clsx("aspect-[1/1] fill-current", className)} {...props} role="img">
      <path d="M15.6341 15.5996C13.0976 15.5996 11.2683 13.5963 11.2683 10.5662C11.2683 5.25737 15.1707 1.30078 19.5366 0.599609L20 1.6764C16.3171 2.35253 13.1463 4.88175 12.4146 9.56455C13.0732 7.78659 14.6829 7.1355 15.9512 7.1355C18.1707 7.1355 19.8537 8.88842 19.8537 11.2423C19.8537 13.7465 18 15.5996 15.6341 15.5996ZM4.36585 15.5996C1.82927 15.5996 0 13.5963 0 10.5662C0 5.25737 3.90244 1.30078 8.26829 0.599609L8.7317 1.6764C5.04878 2.35253 1.87805 4.88175 1.14634 9.56455C1.80488 7.78659 3.41463 7.1355 4.68292 7.1355C6.90244 7.1355 8.58536 8.88842 8.58536 11.2423C8.58536 13.7465 6.7317 15.5996 4.36585 15.5996Z" />
    </svg>
  )
}
const MenuIcon = ({ className, ...props }) => {
  return (
    <svg aria-hidden="true" aria-label="circle" viewBox="0 0 49 24" className={clsx("aspect-[2/1] fill-current", className)} {...props} role="img">
      <rect x="0.25" width="48" height="2" />
      <path d="M8.97563 8.06072C9.63056 8.06072 10.1243 8.29349 10.4568 8.75901C10.7994 9.21442 10.9706 9.85199 10.9706 10.6717V15.7571C10.9706 15.8077 10.9505 15.8533 10.9102 15.8937C10.88 15.9241 10.8397 15.9393 10.7893 15.9393H9.41393C9.36355 15.9393 9.31821 15.9241 9.27791 15.8937C9.24768 15.8533 9.23257 15.8077 9.23257 15.7571V10.7932C9.23257 10.4086 9.157 10.1101 9.00586 9.89753C8.85472 9.68501 8.64817 9.57875 8.38619 9.57875C8.10407 9.57875 7.8824 9.68501 7.72119 9.89753C7.55997 10.1101 7.47937 10.4035 7.47937 10.778V15.7571C7.47937 15.8077 7.45922 15.8533 7.41891 15.8937C7.38868 15.9241 7.34838 15.9393 7.298 15.9393H5.92265C5.87227 15.9393 5.82693 15.9241 5.78662 15.8937C5.7564 15.8533 5.74128 15.8077 5.74128 15.7571V10.7932C5.74128 10.4086 5.66068 10.1101 5.49946 9.89753C5.34832 9.68501 5.14681 9.57875 4.89491 9.57875C4.61279 9.57875 4.39112 9.68501 4.2299 9.89753C4.06869 10.1101 3.98808 10.4035 3.98808 10.778V15.7571C3.98808 15.8077 3.96793 15.8533 3.92763 15.8937C3.8974 15.9241 3.8571 15.9393 3.80672 15.9393H2.43137C2.38099 15.9393 2.33564 15.9241 2.29534 15.8937C2.26511 15.8533 2.25 15.8077 2.25 15.7571V8.36433C2.25 8.31373 2.26511 8.27325 2.29534 8.24289C2.33564 8.2024 2.38099 8.18216 2.43137 8.18216H3.80672C3.8571 8.18216 3.8974 8.2024 3.92763 8.24289C3.96793 8.27325 3.98808 8.31373 3.98808 8.36433V8.60721C3.98808 8.63757 3.99816 8.65781 4.01831 8.66793C4.03846 8.67805 4.05862 8.66793 4.07877 8.63757C4.28028 8.43517 4.50699 8.28843 4.75889 8.19734C5.01078 8.10626 5.25764 8.06072 5.49946 8.06072C6.24507 8.06072 6.79421 8.37951 7.14686 9.01708C7.17709 9.05756 7.22243 9.04238 7.28289 8.97154C7.48441 8.64769 7.7363 8.41493 8.03858 8.27325C8.35093 8.13156 8.66328 8.06072 8.97563 8.06072Z" />
      <path d="M22.7607 12.463C22.7607 12.5136 22.7405 12.5591 22.7002 12.5996C22.67 12.63 22.6297 12.6452 22.5793 12.6452H19.2392C19.1888 12.6452 19.1636 12.6705 19.1636 12.7211V13.4042C19.1636 13.7179 19.2492 13.976 19.4205 14.1784C19.5918 14.3808 19.8135 14.482 20.0855 14.482C20.3173 14.482 20.5138 14.4111 20.675 14.2694C20.8463 14.1176 20.9571 13.9254 21.0075 13.6926C21.0377 13.5914 21.1032 13.5408 21.204 13.5408L22.5491 13.6015C22.5995 13.6015 22.6398 13.6218 22.67 13.6622C22.7103 13.6926 22.7254 13.7381 22.7153 13.7989C22.6448 14.5073 22.3879 15.0538 21.9445 15.4383C21.5012 15.8128 20.8815 16 20.0855 16C19.2593 16 18.6044 15.7824 18.1207 15.3472C17.6472 14.902 17.4104 14.2998 17.4104 13.5408V10.4592C17.4104 9.72043 17.6472 9.1284 18.1207 8.68311C18.6044 8.2277 19.2593 8 20.0855 8C20.9118 8 21.5617 8.2277 22.0352 8.68311C22.5189 9.1284 22.7607 9.72043 22.7607 10.4592V12.463ZM20.0855 9.51803C19.8135 9.51803 19.5918 9.61923 19.4205 9.82163C19.2492 10.024 19.1636 10.2821 19.1636 10.5958V11.2789C19.1636 11.3295 19.1888 11.3548 19.2392 11.3548H20.947C20.9974 11.3548 21.0226 11.3295 21.0226 11.2789V10.5958C21.0226 10.272 20.9369 10.0139 20.7657 9.82163C20.5944 9.61923 20.3677 9.51803 20.0855 9.51803Z" />
      <path d="M32.5104 8.06072C33.1653 8.06072 33.659 8.28337 33.9915 8.72865C34.3341 9.16382 34.5054 9.78621 34.5054 10.5958V15.7571C34.5054 15.8077 34.4852 15.8533 34.4449 15.8937C34.4147 15.9241 34.3744 15.9393 34.324 15.9393H32.9335C32.8832 15.9393 32.8378 15.9241 32.7975 15.8937C32.7673 15.8533 32.7522 15.8077 32.7522 15.7571V10.7324C32.7522 10.3681 32.6766 10.0848 32.5255 9.88235C32.3743 9.67995 32.1577 9.57875 31.8756 9.57875C31.5834 9.57875 31.3567 9.68501 31.1955 9.89753C31.0342 10.1101 30.9536 10.4035 30.9536 10.778V15.7571C30.9536 15.8077 30.9335 15.8533 30.8932 15.8937C30.863 15.9241 30.8227 15.9393 30.7723 15.9393H29.3818C29.3314 15.9393 29.2861 15.9241 29.2458 15.8937C29.2156 15.8533 29.2004 15.8077 29.2004 15.7571V8.36433C29.2004 8.31373 29.2156 8.27325 29.2458 8.24289C29.2861 8.2024 29.3314 8.18216 29.3818 8.18216H30.7723C30.8227 8.18216 30.863 8.2024 30.8932 8.24289C30.9335 8.27325 30.9536 8.31373 30.9536 8.36433V8.66793C30.9536 8.69829 30.9637 8.71853 30.9839 8.72865C31.0141 8.72865 31.0443 8.70841 31.0745 8.66793C31.4171 8.26313 31.8957 8.06072 32.5104 8.06072Z" />
      <path d="M44.4968 8.25048C44.4968 8.19988 44.5119 8.1594 44.5421 8.12903C44.5825 8.08855 44.6278 8.06831 44.6782 8.06831H46.0686C46.119 8.06831 46.1593 8.08855 46.1896 8.12903C46.2299 8.1594 46.25 8.19988 46.25 8.25048V15.6433C46.25 15.6939 46.2299 15.7394 46.1896 15.7799C46.1593 15.8102 46.119 15.8254 46.0686 15.8254H44.6782C44.6278 15.8254 44.5825 15.8102 44.5421 15.7799C44.5119 15.7394 44.4968 15.6939 44.4968 15.6433V15.3093C44.4968 15.2789 44.4867 15.2587 44.4666 15.2486C44.4464 15.2385 44.4263 15.2486 44.4061 15.2789C44.1139 15.7141 43.6454 15.9317 43.0005 15.9317C42.3859 15.9317 41.8872 15.7495 41.5043 15.3852C41.1315 15.0108 40.9451 14.439 40.9451 13.6698V8.25048C40.9451 8.19988 40.9602 8.1594 40.9904 8.12903C41.0307 8.08855 41.0761 8.06831 41.1264 8.06831H42.5169C42.5673 8.06831 42.6076 8.08855 42.6378 8.12903C42.6781 8.1594 42.6983 8.19988 42.6983 8.25048V13.2903C42.6983 14.0493 42.9905 14.4288 43.5749 14.4288C43.8671 14.4288 44.0938 14.3226 44.255 14.1101C44.4162 13.8874 44.4968 13.5889 44.4968 13.2144V8.25048Z" />
      <rect x="0.25" y="22" width="48" height="2" />
    </svg>
  )
}
const SlideChevronLeft = ({ className, ...props }) => {
  return (
    <svg aria-hidden="true" aria-label="circle" viewBox="0 0 18 34" className={clsx("aspect-[1/1] fill-current", className)} {...props} role="img">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.7071 33.7071C18.0976 33.3166 18.0976 32.6834 17.7071 32.2929L2.41421 17L17.7071 1.7071C18.0976 1.31658 18.0976 0.683418 17.7071 0.292892C17.3166 -0.0976334 16.6834 -0.0976334 16.2929 0.292892L0.292893 16.2929C-0.0976311 16.6834 -0.0976311 17.3166 0.292893 17.7071L16.2929 33.7071C16.6834 34.0976 17.3166 34.0976 17.7071 33.7071Z"
      />
    </svg>
  )
}
const NavLongArrow = ({ className, ...props }) => {
  return (
    <svg aria-hidden="true" aria-label="longArrow" viewBox="0 0 24 11" className={clsx("aspect-[2.18182/1] fill-current", className)} {...props} role="img">
      <path d="M23.8531 5.85312C24.0469 5.65937 24.0469 5.34062 23.8531 5.14687L19.3531 0.646869C19.1594 0.453119 18.8406 0.453119 18.6469 0.646869C18.4531 0.840619 18.4531 1.15937 18.6469 1.35312L22.2938 4.99999H0.5C0.225 4.99999 0 5.22499 0 5.49999C0 5.77499 0.225 5.99999 0.5 5.99999H22.2938L18.6469 9.64687C18.4531 9.84062 18.4531 10.1594 18.6469 10.3531C18.8406 10.5469 19.1594 10.5469 19.3531 10.3531L23.8531 5.85312Z" />
    </svg>
  )
}
const NavLongLine = ({ className, ...props }) => {
  return (
    <svg aria-hidden="true" aria-label="longArrow" viewBox="0 0 24 1" className={clsx("aspect-[24/1] fill-current", className)} {...props} role="img">
      <rect width="24" height="1" rx="0.5" />
    </svg>
  )
}
const SlideChevronRight = ({ className, ...props }) => {
  return (
    <svg aria-hidden="true" aria-label="circle" viewBox="0 0 18 34" className={clsx("aspect-[1/1] fill-current", className)} {...props} role="img">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.292892 33.7071C-0.0976315 33.3166 -0.0976315 32.6834 0.292892 32.2929L15.5858 17L0.292892 1.7071C-0.0976315 1.31658 -0.0976315 0.683418 0.292892 0.292892C0.683416 -0.0976334 1.31658 -0.0976334 1.70711 0.292892L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071L1.70711 33.7071C1.31658 34.0976 0.683416 34.0976 0.292892 33.7071Z"
      />
    </svg>
  )
}

export const iconList = {
  circle: CircleIcon,
  circleLine: CircleLineIcon,
  quote: QuoteIcon,
  menu: MenuIcon,
  longArrow: NavLongArrow,
  longLine: NavLongLine,
  slideChevronLeft: SlideChevronLeft,
  slideChevronRight: SlideChevronRight,
}

export const iconListLucide = {
  activity: Activity,
  airplay: Airplay,
  alarmCheck: AlarmCheck,
}
