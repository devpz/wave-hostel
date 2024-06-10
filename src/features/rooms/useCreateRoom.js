import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditRoom } from "../../services/apiRooms";
import { isDemoMode, demoMessage } from "../../config";

export function useCreateRoom() {
  const queryClient = useQueryClient();

  const { mutate: createRoom, isLoading: isCreating } = useMutation({
    mutationFn: createEditRoom,
    onSuccess: () => {
      toast.success("New room successfully created");
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
    },
    onError: (err) => toast.error(err.message),
  });

  const handleCreateRoom = (roomData) => {
    if (isDemoMode) {
      toast.error(demoMessage);
      return;
    }
    createRoom(roomData);
  };

  return { isCreating, createRoom: handleCreateRoom };
}
