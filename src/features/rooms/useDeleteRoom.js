import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteRoom as deleteRoomApi } from "../../services/apiRooms";
import { isDemoMode, demoMessage } from "../../config";

export function useDeleteRoom() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteRoom } = useMutation({
    mutationFn: deleteRoomApi,
    onSuccess: () => {
      toast.success("Room successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  const handleDeleteRoom = (roomId) => {
    if (isDemoMode) {
      toast.error(demoMessage);
      return;
    }
    deleteRoom(roomId);
  };

  return { isDeleting, deleteRoom: handleDeleteRoom };
}
