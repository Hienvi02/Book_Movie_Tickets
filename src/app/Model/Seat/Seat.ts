import { SeatStatus } from "src/app/Pages/Enums/SeatStatus";

export interface Seat {
    name: string;
    statusName: SeatStatus;
}