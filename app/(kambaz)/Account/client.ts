/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
export const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export const USERS_API = `${HTTP_SERVER}/api/users`;

export const signin = async (credentials: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);  // ← ADD (
  return response.data;
};

export const signup = async (user: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);  // ← ADD (
  return response.data;
};

export const updateUser = async (user: any) => {
  const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);  // ← ADD (
  return response.data;
};

export const profile = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/profile`);  // ← ADD (
  return response.data;
};

export const signout = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signout`);  // ← ADD (
  return response.data;
};

export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);  // ← ADD (
  return data;
};

export const findCoursesForUser = async (userId: string) => {
  const response = await axiosWithCredentials.get(`${USERS_API}/${userId}/courses`);  // ← ADD (
  return response.data;
};

export const enrollIntoCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/${userId}/courses/${courseId}`);  // ← ADD (
  return response.data;
};

export const unenrollFromCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.delete(`${USERS_API}/${userId}/courses/${courseId}`);  // ← ADD (
  return response.data;
};