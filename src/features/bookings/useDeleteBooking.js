import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import { isDemoMode, demoMessage } from "../../config";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success("Booking successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  const handleDeleteBooking = (bookingId) => {
    if (isDemoMode) {
      toast.error(demoMessage);
      return;
    }
    deleteBooking(bookingId);
  };

  return { isDeleting, deleteBooking: handleDeleteBooking };
}
