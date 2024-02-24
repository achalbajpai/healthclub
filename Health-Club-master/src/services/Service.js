"use client";
import { API_END_POINTS } from "@/utils/constants";

const BACKEND_URL = "http://localhost:3001";

const makePostRequest = async (endPoint, body) => {
  const response = await fetch(BACKEND_URL + endPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    credentials: "include",
  });

  const data = await response.json();
  return { ...data, status: response.status };
};

const makeGetRequest = async (endPoint) => {
  const response = await fetch(BACKEND_URL + endPoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  const data = await response.json();
  return { ...data, status: response.status };
};

export class Service {
  static async login(loginData) {
    return await makePostRequest(API_END_POINTS.LOGIN, loginData);
  }

  static async signupPatient(signupData) {
    return await makePostRequest(API_END_POINTS.SIGNUP_PATIENT, signupData);
  }

  static async signupDoctor(signupData) {
    return await makePostRequest(API_END_POINTS.SIGNUP_DOCTOR, signupData);
  }
}
