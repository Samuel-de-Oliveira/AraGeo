# QR Code Generator!!! 
# USAGE: python qr-code.py "[Link of the solid]" [Image name]

import qrcode
import sys
import os

# Get args
args: list = sys.argv[1:]
print(args)

if __name__ == "__main__":
    # Start QR Code
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=4,
    )

    # Render QR Code
    qr.add_data(args[0])
    qr.make(fit=True)

    # Set Color
    img = qr.make_image(
        fill_color="black",
        back_color="white",
    )

    # Create QR Code directory
    os.system("mkdir -p qr-codes")

    # Save
    img.save(f"qr-codes/{args[1]}.png")
