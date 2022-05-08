import { eachDayOfInterval, startOfMonth, endOfMonth, format } from "date-fns";
import React, { ReactNode, useContext } from "react";

type CalendarState = {
  days: Date[];
  currentMonth: Date;
  locale?: Locale;
  onCurrentMonthChange: (date: Date) => any;
};

const MonthlyCalendarContext = React.createContext<CalendarState>(
  {} as CalendarState
);

export const useMonthlyCalendar = () => useContext(MonthlyCalendarContext);

type Props = {
  locale?: Locale;
  children: ReactNode;
  currentMonth: Date;
  onCurrentMonthChange: (date: Date) => any;
};

export const MonthlyCalendar = ({
  locale,
  currentMonth,
  onCurrentMonthChange,
  children,
}: Props) => {
  let monthStart = startOfMonth(currentMonth);
  let days = eachDayOfInterval({
    start: monthStart,
    end: endOfMonth(monthStart),
  });

  return (
    <MonthlyCalendarContext.Provider
      value={{
        days,
        locale,
        onCurrentMonthChange,
        currentMonth: monthStart,
      }}
    >
      {children}
    </MonthlyCalendarContext.Provider>
  );
};

export const MonthlyNav = () => {
  let { locale, currentMonth } = useMonthlyCalendar();

  return (
    <div>
      {/* <button
        onClick={() => onCurrentMonthChange(subMonths(currentMonth, 1))}
        className="rc-cursor-pointer"
      >
        Previous
      </button> */}
      <div
        className="rc-ml-4 rc-mr-4 rc-w-custom rc-text-center"
        aria-label="Current Month"
      >
        <h3>{format(currentMonth, "LLLL yyyy", { locale })}</h3>
      </div>
      {/* <button
        onClick={() => onCurrentMonthChange(addMonths(currentMonth, 1))}
        className="rc-cursor-pointer"
      >
        Next
      </button> */}
    </div>
  );
};
