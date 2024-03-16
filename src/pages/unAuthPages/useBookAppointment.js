import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export default function useBookAppointment() {
  const { mutate: bookAppointment, isPending: bookAppointmentLoading } =
    useMutation({
      mutationFn: async (formData) => {
        await axios.post(
          `${import.meta.env.VITE_APP_BASE_URL}/formhandlers/book_appointment/`,
          formData,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
      },
    });
  return { bookAppointment, bookAppointmentLoading };
}
