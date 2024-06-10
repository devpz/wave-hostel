import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditRoom } from "../../services/apiRooms";
import { toast } from "react-hot-toast";
import { isDemoMode, demoMessage } from "../../config";

export function useEditRoom() {
  const queryClient = useQueryClient();

  const { mutate: editRoom, isLoading: isEditing } = useMutation({
    mutationFn: ({ newRoomData, id }) => createEditRoom(newRoomData, id),
    onSuccess: () => {
      toast.success("Room successfully edited");
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
    },
    onError: (err) => toast.error(err.message),
  });

  const handleEditRoom = ({ newRoomData, id }) => {
    if (isDemoMode) {
      toast.error(demoMessage);
      return;
    }
    editRoom({ newRoomData, id });
  };

  return { isEditing, editRoom: handleEditRoom };
}
