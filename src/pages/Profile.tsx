import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { userProfile } from "@/utils/api/users";
import { editProfile, updatePhoto } from "@/utils/api/users/api";
import {
  EditProfileType,
  UpdatePictureType,
  editProfileSchema,
  updatePhotoSchema,
} from "@/utils/api/users/types";
import { userWallet } from "@/utils/api/wallet";
import { numberWithCommas } from "@/utils/hooks/usePrice";
import { zodResolver } from "@hookform/resolvers/zod";
import { atom, useAtom } from "jotai";
import { Loader2 } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const profileAtom = atom({
  name: "",
  email: "",
  address: "",
  profile_picture: "",
});
const walletAtom = atom(0);
const loadingAtom = atom(true);
const profilePictureAtom = atom("");

const Profile = () => {
  const [profile, setProfile] = useAtom(profileAtom);
  const [wallets, setWallets] = useAtom(walletAtom);
  const [loading, isLoading] = useAtom(loadingAtom);
  const [profilePicture, setProfilePicture] = useAtom(profilePictureAtom);
  const [selectedImage, setSelectedImage] = useState<string | undefined>();

  const getProfile = useCallback(async () => {
    isLoading(true);
    const response = await userProfile();
    if (response.statusCode === 200) {
      isLoading(false);
      setProfile(response.data.data);
      setProfilePicture(response.data.data.profile_picture);
    }
  }, [isLoading, setProfile, setProfilePicture]);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  const getWallet = useCallback(async () => {
    isLoading(true);
    const response = await userWallet();
    if (response.statusCode === 200) {
      isLoading(false);
      setWallets(response.data.data.Balance);
    }
  }, [isLoading, setWallets]);

  useEffect(() => {
    getWallet();
  }, [getWallet]);

  const form = useForm<EditProfileType>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UpdatePictureType>({
    resolver: zodResolver(updatePhotoSchema),
    defaultValues: {
      profile_picture: "",
    },
  });

  useEffect(() => {
    if (profile) {
      form.setValue("name", profile.name || "");
      form.setValue("email", profile.email || "");
      form.setValue("address", profile.address || "");
      setProfilePicture(profile.profile_picture);
    }
  }, [profile, form]);

  async function onSubmit(data: EditProfileType) {
    try {
      const result = await editProfile(data);
      if (result.statusCode === 200) {
        toast({
          description: `Edit profile success`,
        });
      }
    } catch (error) {
      toast({
        title: "Oops! Something went wrong.",
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  }

  const handleUpdatePhoto = async (data: UpdatePictureType) => {
    try {
      const result = await updatePhoto(data);
      if (result.statusCode === 200) {
        toast({
          description: `Edit profile success`,
        });

        setProfilePicture(result.data.data);
        setSelectedImage(undefined);
      }
    } catch (error) {
      toast({
        title: "Oops! Something went wrong.",
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  };

  return (
    <section className="relative overflow-auto h-screen py-32">
      <div className="py-6 pb-28 bg-slate-100">
        <div className="container">
          <div className="flex justify-start gap-5 my-6">
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#525252"
                d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
              />
              <path
                fill="#525252"
                d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
              />
            </svg>
            <span className="text-neutral-600">profile</span>
          </div>

          <div className="bg-gradient-to-b from-purple-800 to-[#464BD8] relative overflow-hidden rounded-xl p-5">
            <div className="flex items-center gap-10">
              <div className="flex flex-col items-center ">
                <form
                  onSubmit={handleSubmit(handleUpdatePhoto)}
                  className="flex flex-col items-center space-y-4"
                >
                  <div className="relative">
                    <img
                      src={
                        (selectedImage ? selectedImage : profilePicture) ||
                        "https://via.placeholder.com/200?text=No+Image"
                      }
                      className="w-32 group-hover:w-36 group-hover:h-36 h-32 mb-2 object-center object-cover rounded-full"
                    />
                  </div>
                  {!selectedImage && (
                    <label
                      htmlFor="file_input"
                      className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-full text-sm px-5 py-2.5"
                    >
                      Choose Profile Picture
                      <input
                        type="file"
                        id="file_input"
                        hidden
                        {...register("profile_picture", {
                          onChange: (e) => {
                            setSelectedImage(
                              URL.createObjectURL(e.target.files[0])
                            );
                          },
                        })}
                      />
                    </label>
                  )}
                  {selectedImage && (
                    <Button
                      data-testid="btn-submit-photo"
                      type="submit"
                      className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-full text-sm px-5 py-2.5"
                      disabled={isSubmitting}
                      aria-disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <p className="flex items-center gap-x-3 text-sm">
                          <Loader2 className={"animate-spin text-xl"} /> Please
                          wait
                        </p>
                      ) : (
                        "Upload Photo"
                      )}
                    </Button>
                  )}
                </form>
              </div>
              <div className="w-fit transition-all transform duration-500">
                <h1 className="text-white font-bold text-lg">{profile.name}</h1>
                <p className="text-white font-semibold">Balance</p>
                <span className="text-white font-bold text-xl">
                  {loading ? (
                    <div className="h-10 bg-slate-300 rounded-xl w-full mx-auto animate-pulse"></div>
                  ) : (
                    `Rp ` + numberWithCommas(wallets)
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-t-3xl border-t border-gray-700 -mt-8 bg-white">
        <div className="container py-6 px-16">
          <h5 className="text-neutral-700 font-bold my-4">Edit profile</h5>
          <Form {...form}>
            <form
              data-testid="form-profile"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="mb-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <Input
                      data-testid="input-name"
                      placeholder="your name"
                      type="text"
                      disabled={form.formState.isSubmitting}
                      aria-disabled={form.formState.isSubmitting}
                      {...field}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  )}
                />
              </div>
              <div className="mb-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <Input
                      data-testid="input-email"
                      placeholder="your@mail.com"
                      type="text"
                      disabled={form.formState.isSubmitting}
                      aria-disabled={form.formState.isSubmitting}
                      {...field}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  )}
                />
              </div>
              <div className="mb-6">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <textarea
                      data-testid="input-address"
                      placeholder="your address"
                      rows={4}
                      disabled={form.formState.isSubmitting}
                      aria-disabled={form.formState.isSubmitting}
                      {...field}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  )}
                />
              </div>

              <Button
                data-testid="btn-submit"
                type="submit"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
                className="text-white bg-primary-first hover:bg-[#464BD8]/80 font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                {form.formState.isSubmitting ? (
                  <>
                    <div
                      className="inline-block mr-2 h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] text-white dark:text-white"
                      role="status"
                    ></div>
                    Loading
                  </>
                ) : (
                  "Edit Profile"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Profile;
