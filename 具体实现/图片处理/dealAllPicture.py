import os
from PIL import Image  # 添加这一行导入语句

def resize_image(input_image_path, output_image_path, new_width, new_height):
    try:
        # 打开图像文件
        image = Image.open(input_image_path)

        # 调整图像大小
        resized_image = image.resize((new_width, new_height))

        # 保存修改后的图像
        resized_image.save(output_image_path)
        print(f"已成功将图像修改为 {new_width} x {new_height} 尺寸：{output_image_path}")
    except Exception as e:
        print(f"出现错误：{e}")

def resize_images_in_folder(input_folder, output_folder, new_width, new_height):
    try:
        # 确保输出文件夹存在
        if not os.path.exists(output_folder):
            os.makedirs(output_folder)

        # 遍历输入文件夹中的所有文件
        for filename in os.listdir(input_folder):
            if filename.endswith(('.jpg', '.jpeg', '.png', '.gif')):  # 确保文件是图片文件
                input_image_path = os.path.join(input_folder, filename)
                output_image_path = os.path.join(output_folder, filename)

                # 调用 resize_image 函数来调整图像大小
                resize_image(input_image_path, output_image_path, new_width, new_height)

    except Exception as e:
        print(f"出现错误：{e}")

if __name__ == "__main__":
    input_folder = "D:/桌面/pictures/mypicture/"  # 输入文件夹路径
    output_folder = "D:/桌面/pictures/out_picture/"  # 输出文件夹路径
    new_width = 259  # 新的宽度
    new_height = 194  # 新的高度

    resize_images_in_folder(input_folder, output_folder, new_width, new_height)
