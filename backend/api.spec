# api.spec tells PyInstaller what files and settings to use for the build configuration 
# PyInstaller packages the python application (.py scripts and dependencies) into a stand-alone executable

# -*- mode: python ; coding: utf-8 -*-

block_cipher = None

a = Analysis(
    ['backend.py'],  # Main Python script to be packaged
    pathex=[],  # List any additional directories you want PyInstaller to look in
    binaries=[],

    hiddenimports=[  # Hidden imports, if any
        "uvicorn.logging",
        "uvicorn.lifespan.off",
        "uvicorn.lifespan.on",
        "uvicorn.lifespan",
        "uvicorn.protocols.websockets.auto",
        "uvicorn.protocols.websockets.wsproto_impl",
        "uvicorn.protocols.websockets_impl",
        "uvicorn.protocols.http.auto",
        "uvicorn.protocols.http.h11_impl",
        "uvicorn.protocols.http.httptools_impl",
        "uvicorn.protocols.websockets",
        "uvicorn.protocols.http",
        "uvicorn.protocols",
        "uvicorn.loops.auto",
        "uvicorn.loops.asyncio",
        "uvicorn.loops.uvloop",
        "uvicorn.loops"
    ],
    hookspath=[],
    runtime_hooks=[],
    excludes=[],
    win_no_prefer_redirects=False,
    win_private_assemblies=False,
    cipher=block_cipher,
    noarchive=False
)

pyz = PYZ(a.pure, a.zipped_data, cipher=block_cipher)

exe = EXE(
    pyz,
    a.scripts,
    [],
    exclude_binaries=True,
    name='api',
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=True, # Compress executable - try with or without: setting true could make file smaller but cause issues
    console=True,  # Set to False if you want a GUI app (no terminal window)
    icon='../electron/resources/heart-icon.icns'  # For macOS, use a .icns icon (not .ico)
)

coll = COLLECT(
    exe,
    a.binaries,
    a.zipfiles,
    a.datas,
    strip=False,
    upx=True,
    upx_exclude=[],
    name='api'
)
