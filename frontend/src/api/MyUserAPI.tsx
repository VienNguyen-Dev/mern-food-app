import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import { toast } from "sonner";

const VITE_BASE_URL = import.meta.env.VITE_BASE_API_URL;

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};
export const useCreateUser = () => {
  const { getAccessTokenSilently } = useAuth0();
  const CreateUserRequest = async (user: CreateUserRequest) => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${VITE_BASE_URL}/api/my/user/createUser`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response) {
      throw new Error("Create user error");
    }
  };
  const { mutateAsync: createUser, isLoading, isError, isSuccess } = useMutation(CreateUserRequest);
  return {
    createUser,
    isLoading,
    isError,
    isSuccess,
  };
};

type UpdateUserRequest = {
  name: string;
  addressLine1: string;
  city: string;
  country: string;
};
export const useUpdateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();
  const updateUserRequest = async (formData: UpdateUserRequest) => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${VITE_BASE_URL}/api/my/user/updateUser`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Update fail with user profile");
    }
    return response.json();
  };
  const { mutateAsync: updateUser, isLoading, isSuccess, isError, error, reset } = useMutation(updateUserRequest); //một hàm (thường là một hàm gọi API) được truyền vào để thực hiện việc cập nhật dữ liệu người dùng.
  if (isSuccess) {
    toast.success("User profile upateted successfully!");
  }

  if (error) {
    toast.error(error.toString());
    reset();
  }
  return {
    updateUser,
    isLoading,
  };
};
