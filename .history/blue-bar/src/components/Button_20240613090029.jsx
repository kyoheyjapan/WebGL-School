// Button.jsx
import { iconList, iconListLucide } from "./icon.jsx"
import clsx from "clsx"
import Link from "next/link"

const typeStyles = {
  rectangle: "group group-hover:text-tx-h border box-border flex items-center justify-center font-bold hover:opacity-80 active:opacity-60",
  square: "group group-hover:text-tx-h border aspect-square box-border flex items-center justify-center leading-none hover:opacity-80 active:opacity-60",
}
const sizeStyles = {
  rectangle: {
    "3xs": {
      text: "typo-3xs",
      icon: "h-2.5 w-2.5",
      buttonSize: "h-6 sm:h-6 px-3 gap-1 md:gap-2",
    },
    "2xs": {
      text: "typo-2xs",
      icon: "h-3 w-3",
      buttonSize: "h-6 sm:h-8 px-3 gap-1 md:gap-2",
    },
    xs: {
      text: "typo-xs",
      icon: "h-3.5 w-3.5",
      buttonSize: "h-8 sm:h-10 px-4 gap-1 md:gap-2",
    },
    sm: {
      text: "typo-sm",
      icon: "h-4 w-4",
      buttonSize: "h-10 sm:h-12 px-5 gap-1 md:gap-2",
    },
    md: {
      text: "typo-md",
      icon: "h-4 w-4",
      buttonSize: "h-12 sm:h-14 px-5 gap-1 md:gap-2",
    },
    lg: {
      text: "typo-lg",
      icon: "h-5 w-5",
      buttonSize: "h-14 sm:h-16 px-6 gap-1 md:gap-2",
    },
    xl: {
      text: "typo-xl",
      icon: "h-6 w-6",
      buttonSize: "h-16 sm:h-20 px-8 gap-1 md:gap-2",
    },
  },
  square: {
    "3xs": {
      text: "typo-2xs",
      icon: "2.5 w-2.5",
      buttonSize: "sm:min-h-6 sm:min-w-6 sm:h-6 sm:w-6 sm:max-w-6 sm:max-h-6 min-h-4 min-w-4 h-4 w-4 max-w-4 max-h-4",
    },
    "2xs": {
      text: "typo-2xs",
      icon: "h-3 w-3",
      buttonSize: "sm:min-h-8 sm:min-w-8 sm:h-8 sm:w-8 sm:max-w-8 sm:max-h-8 min-h-6 min-w-6 h-6 w-6 max-w-6 max-h-6",
    },
    xs: {
      text: "typo-xs",
      icon: "h-3.5 w-3.5",
      buttonSize: "sm:min-h-10 sm:min-w-10 sm:h-10 sm:w-10 sm:max-w-10 sm:max-h-10 min-h-8 min-w-8 h-8 w-8 max-w-8 max-h-8",
    },
    sm: {
      text: "typo-sm",
      icon: "h-4 w-4",
      buttonSize: "sm:min-h-12 sm:min-w-12 sm:h-12 sm:w-12 sm:max-w-12 sm:max-h-12 min-h-10 min-w-10 h-10 w-10 max-w-10 max-h-10",
    },
    md: {
      text: "typo-md",
      icon: "h-4 w-4",
      buttonSize: "sm:min-h-14 sm:min-w-14 sm:h-14 sm:w-14 sm:max-w-14 sm:max-h-14 min-h-12 min-w-12 h-12 w-12 max-w-12 max-h-12",
    },
    lg: {
      text: "typo-lg",
      icon: "h-5 w-5",
      buttonSize: "sm:min-h-16 sm:min-w-16 sm:h-16 sm:w-16 sm:max-w-16 sm:max-h-16 min-h-14 min-w-14 h-14 w-14 max-w-14 max-h-14",
    },
    xl: {
      text: "typo-xl",
      icon: "h-6 w-6",
      buttonSize: "sm:min-h-20 sm:min-w-20 sm:h-20 sm:w-20 sm:max-w-20 sm:max-h-20 min-h-16 min-w-16 h-16 w-16 max-w-16 max-h-16",
    },
  },
}
const hierarchyStyles = {
  rectangle: {
    primary: {
      button: "bg-pri text-white border-black/20 no-underline",
      icon: "text-white",
    },
    secondary: {
      button: "group bg-white text-pri border-pri no-underline hover:text-hov hover:opacity-60 active:opacity-40 hover:border-bd-al",
      icon: "text-pri",
    },
    tertiary: {
      button: "group bg-white text-tx border-bd no-underline hover:text-hov hover:bg-bg-al hover:border-bd-al active:opacity-40",
      icon: "text-icn",
    },
    transparent: {
      button: "group bg-white/0 text-tx border-none no-underline hover:text-hov group-hover:text-hov",
      icon: "text-icn group-hover:text-pri",
    },
  },
  square: {
    primary: {
      button: "bg-pri text-tx-w border-black/20 no-underline hover:opacity-50 active:opacity-30 ",
      icon: "text-white group-hover:text-hov",
    },
    secondary: {
      button: "bg-white text-pri border-pri no-underline hover:opacity-50 active:opacity-30 hover:border-bd-al ",
      icon: "text-pri group-hover:text-hov",
    },
    tertiary: {
      button: "bg-white text-tx border-bd-l no-underline hover:bg-bg-al hover:opacity-50 active:opacity-30 hover:border-bd-al ",
      icon: "text-icn group-hover:text-hov",
    },
    transparent: {
      button: "bg-white/0 text-pri border-none no-underline hover:opacity-50 active:opacity-30  ",
      icon: "text-icn group-hover:text-hov",
    },
  },
}
//
//
//  Button
//
//
export default function Button({ type = "rectangle", hierarchy = "primary", size = "xs", href = "/", onClick, iconClass, className, icon, position = "right", as = "anchor", ...props }) {
  const IconComponent = icon ? iconList[icon] ?? iconListLucide[icon] : null
  const { text: textSizeClass = "xs", icon: iconSizeClass = "xs", buttonSize } = sizeStyles[type]?.[size] ?? {}

  const { button: buttonClass, icon: iconColorClass } = hierarchyStyles[type]?.[hierarchy] ?? {}

  const content = (
    <>
      {IconComponent && position === "left" && <IconComponent className={`${iconClass}`} />}
      <span className={textSizeClass}>{props.children}</span>
      {IconComponent && position === "right" && <IconComponent className={`${iconClass}`} />}
    </>
  )

  const commonClassNames = clsx(typeStyles[type], buttonClass, buttonSize, className)
  switch (as) {
    case "link":
      return (
        <Link href={href} {...props} className={clsx("", commonClassNames, className)}>
          {content}
        </Link>
      )
    case "buttonSubmit":
      return (
        <button onClick={onClick} type="submit" {...props} className={clsx("", commonClassNames, className)}>
          {content}
        </button>
      )
    case "button":
      return (
        <button onClick={onClick} type="button" {...props} className={clsx("", commonClassNames, className)}>
          {content}
        </button>
      )
    case "div":
      return (
        <div {...props} className={clsx("", commonClassNames, className)}>
          {content}
        </div>
      )
    case "anchor":
    default:
      return (
        <a href={href} onClick={onClick} {...props} className={clsx("", commonClassNames, className)}>
          {content}
        </a>
      )
  }
}
