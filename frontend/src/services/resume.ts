import api from "@/lib/api";

export async function uploadResume(
  file: File,
  targetRole: string
) {
  const formData = new FormData();

  formData.append("resume", file);
  formData.append("targetRole", targetRole);

  const response = await api.post(
    "/resume",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
}