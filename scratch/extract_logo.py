from PIL import Image, ImageOps, ImageChops

def extract_logo_v2(input_path, output_path):
    img = Image.open(input_path).convert("RGB")
    
    # The logo is white, the background is darker.
    # We can use the difference from the background color to create a mask.
    bg_color = (182, 151, 122)
    
    # Create a mask where pixels similar to bg_color are black, and others (white logo) are white.
    # Actually, let's just make everything white that is "lighter" than the background.
    
    # Convert to grayscale
    gray = ImageOps.grayscale(img)
    
    # We want to map the background intensity to 0 (transparent) and white to 255 (opaque).
    # Background intensity is roughly (182+151+122)/3 = 151.
    # Let's use a threshold.
    
    # Create alpha channel: 
    # Pixels > 200 (logo) should be 255.
    # Pixels < 160 (background area) should be 0.
    # Transition in between.
    
    alpha = gray.point(lambda p: 255 if p > 220 else (0 if p < 180 else int((p - 180) * (255 / 40))))
    
    # Create white image
    white_img = Image.new("RGBA", img.size, (255, 255, 255, 255))
    white_img.putalpha(alpha)
    
    # Crop to content
    bbox = white_img.getbbox()
    if bbox:
        white_img = white_img.crop(bbox)
    
    # Add padding
    padding = 40
    final_img = Image.new("RGBA", (white_img.width + padding*2, white_img.height + padding*2), (255, 255, 255, 0))
    final_img.paste(white_img, (padding, padding), white_img)
    
    final_img.save(output_path, "PNG")
    print(f"Logo V2 saved to {output_path}")

if __name__ == "__main__":
    extract_logo_v2("/home/adriano-dias/fontes/hellentrento.com.br/rascunhos/logo2.jpeg", "/home/adriano-dias/fontes/hellentrento.com.br/rascunhos/logo3.png")
