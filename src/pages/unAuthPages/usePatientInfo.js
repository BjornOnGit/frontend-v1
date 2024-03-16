import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export default function usePatientInfo() {
  const { mutate: patientInfo, isPending: patientInfoLoading } = useMutation({
    mutationFn: async (formData) => {
      await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/formhandlers/patient_info/`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    },
  });
  return { patientInfo, patientInfoLoading };
}
