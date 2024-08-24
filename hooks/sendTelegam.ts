import axios from "axios";

export const sendTelegram = async (message: string) => {
  try {
    const {
      data: { ok },
    } = await axios.post<{ ok: boolean }>(
      "https://api.telegram.org/bot7075000291:AAFAV6lid8xa8HabaBev5F4tCH2_WY7BS1g/sendMessage",
      {
        chat_id: -4509779952,
        text: message,
        parse_mode: "html",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return ok;
  } catch (error) {
    console.error(error);
  }
};
