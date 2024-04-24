// "use client";
// import * as React from "react"
// import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
// import { DayPicker } from "react-day-picker"

// import { cn } from "@/lib/utils"
// import { buttonVariants } from "Calendar/ui/button"

// function Calendar({
//   className,
//   classNames,
//   showOutsideDays = true,
//   ...props
// }) {
//   return (
//     (<DayPicker
//       showOutsideDays={showOutsideDays}
//       className={cn("yesp-3", className)}
//       classNames={{
//         months: "yesflex yesflex-col sm:yesflex-row yesspace-y-4 sm:yesspace-x-4 sm:yesspace-y-0",
//         month: "yesspace-y-4",
//         caption: "yesflex yesjustify-center yespt-1 yesrelative yesitems-center",
//         caption_label: "yestext-sm yesfont-medium",
//         nav: "yesspace-x-1 yesflex yesitems-center",
//         nav_button: cn(
//           buttonVariants({ variant: "outline" }),
//           "yesh-7 yesw-7 yesbg-transparent yesp-0 yesopacity-50 hover:yesopacity-100"
//         ),
//         nav_button_previous: "yesabsolute yesleft-1",
//         nav_button_next: "yesabsolute yesright-1",
//         table: "yesw-full yesborder-collapse yesspace-y-1",
//         head_row: "yesflex",
//         head_cell:
//           "yestext-muted-foreground yesrounded-md yesw-8 yesfont-normal yestext-[0.8rem]",
//         row: "yesflex yesw-full yesmt-2",
//         cell: cn(
//           "yesrelative yesp-0 yestext-center yestext-sm focus-within:yesrelative focus-within:yesz-20 [&:has([aria-selected])]:yesbg-accent [&:has([aria-selected].day-outside)]:yesbg-accent/50 [&:has([aria-selected].day-range-end)]:yesrounded-r-md",
//           props.mode === "range"
//             ? "[&:has(>.day-range-end)]:yesrounded-r-md [&:has(>.day-range-start)]:yesrounded-l-md first:[&:has([aria-selected])]:yesrounded-l-md last:[&:has([aria-selected])]:yesrounded-r-md"
//             : "[&:has([aria-selected])]:yesrounded-md"
//         ),
//         day: cn(
//           buttonVariants({ variant: "ghost" }),
//           "yesh-8 yesw-8 yesp-0 yesfont-normal aria-selected:yesopacity-100"
//         ),
//         day_range_start: "yesday-range-start",
//         day_range_end: "yesday-range-end",
//         day_selected:
//           "yesbg-primary yestext-primary-foreground hover:yesbg-primary hover:yestext-primary-foreground focus:yesbg-primary focus:yestext-primary-foreground",
//         day_today: "yesbg-accent yestext-accent-foreground",
//         day_outside:
//           "yesday-outside yestext-muted-foreground yesopacity-50 yes aria-selected:yesbg-accent/50 aria-selected:yestext-muted-foreground aria-selected:yesopacity-30",
//         day_disabled: "yestext-muted-foreground yesopacity-50",
//         day_range_middle:
//           "aria-selected:yesbg-accent aria-selected:yestext-accent-foreground",
//         day_hidden: "yesinvisible",
//         ...classNames,
//       }}
//       components={{
//         IconLeft: ({ ...props }) => <ChevronLeftIcon className="yesh-4 yesw-4" />,
//         IconRight: ({ ...props }) => <ChevronRightIcon className="yesh-4 yesw-4" />,
//       }}
//       {...props} />)
//   );
// }
// Calendar.displayName = "Calendar"

// export { Calendar }
