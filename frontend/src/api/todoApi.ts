import axios from 'axios';
import { ITodo } from "../types";

export const BACKEND_URL = "http://localhost:1337"
    // process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:1337";

export const TO_DO_ENDPOINT = "/api/todos";

export async function getAllToDos() {
    return await fetch("http://localhost:1337/api/todos");
}