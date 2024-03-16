import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export default function useBookNow() {
  const { mutate: bookNow, isPending: bookNowLoading } = useMutation({
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
  return { bookNow, bookNowLoading };
}
