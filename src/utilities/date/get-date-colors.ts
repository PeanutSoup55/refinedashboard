import dayjs from "dayjs";
type DateColors = "success" | "processing" | "error" | "default" | "warning";

export const getDateColor = (args: {
    date: string;
    defaultColor?: DateColors;
}): DateColors => {
    const date = dayjs(args.date);
    const now = dayjs();

    if (date.isBefore(now)) {
        return "error";
    }
    if (date.isBefore(now.add(3, "day"))) {
        return "warning";
    }

    return args.defaultColor ?? "default";
};