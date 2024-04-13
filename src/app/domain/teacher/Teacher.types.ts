export interface Reviews{
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;
}

export interface ITeacher {
    id: number;
    name: string;
    surname: string;
    languages: string[];
    levels: string[];
    rating: number;
    reviews: Reviews;
    price_per_hour: number;
    lessons_done: number;
    avatar_url:string;
    lesson_info: string;
    conditions: string[];
    experience: string;
}