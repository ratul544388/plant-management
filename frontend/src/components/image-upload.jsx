import { request } from "@/lib/request";
import { useMutation } from "@tanstack/react-query";

const ImageUpload = () => {
  const { mutate } = useMutation({
    mutationFn: async (e) => {
      const file = e.target.files[0];
      await request({ method: "post", url: "/api/plants/upload-image", data: file });
    },
  });

  return (
    <div>
      <input type="file" onChange={mutate} />
    </div>
  );
};

export default ImageUpload;
