// "use client";

// import { TrendingUp } from "lucide-react";
// import { Pie, PieChart } from "recharts";
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card";
// import {
//     ChartContainer,
//     ChartTooltip,
//     ChartTooltipContent,
// } from "@/components/ui/chart";

// export const description = "A simple pie chart";

// const chartData = [
//     { browser: "Expense", visitors: 100, fill: "var(--color-chrome)" },
//     { browser: "Income", visitors: 200, fill: "var(--color-safari)" },
// ];

// const chartConfig = {
//     visitors: {
//         label: "Visitors",
//     },
//     chrome: {
//         label: "Chrome",
//         color: "var(--chart-1)",
//     },
//     safari: {
//         label: "Safari",
//         color: "var(--chart-2)",
//     },
//     firefox: {
//         label: "Firefox",
//         color: "var(--chart-3)",
//     },
//     edge: {
//         label: "Edge",
//         color: "var(--chart-4)",
//     },
//     other: {
//         label: "Other",
//         color: "var(--chart-5)",
//     },
// };

// export function ChartPieSimple(chartData, chartConfig) {
//     return (
//         <Card className="flex flex-col">
//             <CardHeader className="items-center pb-0">
//                 <CardTitle>Pie Chart</CardTitle>
//                 <CardDescription>January - June 2024</CardDescription>
//             </CardHeader>
//             <CardContent className="flex-1 pb-0">
//                 <ChartContainer
//                     config={chartConfig}
//                     className="mx-auto aspect-square max-h-[250px]"
//                 >
//                     <PieChart>
//                         <ChartTooltip
//                             cursor={false}
//                             content={<ChartTooltipContent hideLabel />}
//                         />
//                         <Pie
//                             data={chartData}
//                             dataKey="visitors"
//                             nameKey="browser"
//                         />
//                     </PieChart>
//                 </ChartContainer>
//             </CardContent>
//             <CardFooter className="flex-col gap-2 text-sm">
//                 <div className="flex items-center gap-2 font-medium leading-none">
//                     Trending up by 5.2% this month{" "}
//                     <TrendingUp className="w-4 h-4" />
//                 </div>
//                 <div className="leading-none text-muted-foreground">
//                     Showing total visitors for the last 6 months
//                 </div>
//             </CardFooter>
//         </Card>
//     );
// }
