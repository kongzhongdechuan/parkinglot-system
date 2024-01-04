from PIL import Image

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

if __name__ == "__main__":
    input_image = "D:/桌面/小毕设/具体实现/车牌识别/images/t4.jpg"  # 输入图像文件的路径
    output_image = "D:/桌面/test.jpg"  # 输出图像文件的路径
    new_width = 259 # 新的宽度
    new_height = 194  # 新的高度

    resize_image(input_image, output_image, new_width, new_height)
