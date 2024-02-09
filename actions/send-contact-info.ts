"use client";
interface Props {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}


export const sendContactInfo = async (info: Props) => {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/contact/" /* <= API endpoint post */,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(info),
      }
    );
    if (!res.ok) throw new Error(res.statusText || "Error trying to post info");
  } catch (error) {
    console.error("[CONTACT_ERROR]:", error);
  }
};
