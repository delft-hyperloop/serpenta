# Getting Started

Again, Serpenta is a GUI standard created and imposed during DH08. This guide will help you set up Serpenta
in a new Tauri project that will be this year's monorepo (we strongly advise packing your GUI together with
the embedded code). 

> If you wish to extend or modify Serpenta itself, please check the [Contributing and Maintenance guide](Contributing-Maintenance.md).
> {style="note"}

## Dependencies

First of all, you will need to install the needed dependencies. These include [Node](https://nodejs.org/en), [Rust](https://www.rust-lang.org/), and
the C build tools. 

To deal with this much easier, we have provided a nix shell that will spawn a shell with all the necessary 
dependencies available for you inside. You can also opt in for the traditional approach and download all 
dependencies yourself.

### Using the Nix package manager

[Nix](https://nixos.org/) is a declarative package manager that can be used to make reproducible environments 
effortlessly. It is available on Windows (under WSL), Mac and Linux. 

**Using a shell:**

The script bellow will spawn a shell with all dependencies existing within it. To use it, copy the code and 
run `nix-shell shell.nix`.

```
let
  pkgs = import <nixpkgs> { };

  libraries = with pkgs;[
    webkitgtk
    gtk3
    cairo
    gdk-pixbuf
    glib
    dbus
    openssl_3
    librsvg
  ];

  packages = with pkgs; [
    pkg-config
    dbus
    openssl_3
    glib
    gtk3
    libsoup
    webkitgtk
    appimagekit
    librsvg
    rustc
    cargo
    cargo-tauri
  ];
in
pkgs.mkShell {
  buildInputs = packages;

  shellHook =
    ''
      export LD_LIBRARY_PATH=${pkgs.lib.makeLibraryPath libraries}:$LD_LIBRARY_PATH
      export XDG_DATA_DIRS=${pkgs.gsettings-desktop-schemas}/share/gsettings-schemas/${pkgs.gsettings-desktop-schemas.name}:${pkgs.gtk3}/share/gsettings-schemas/${pkgs.gtk3.name}:$XDG_DATA_DIRS
    '';
}
```
{collapsible="true" collapsed-title="shell.nix"}

**Using flakes and direnv:**

> Flakes are an experimental feature that produces a lock file with the version stamps of all packages. 
> Direnv allows you to load all dependencies the moment you `cd` into the repository.
> {style="note"} 

Make sure you have
direnv installed - you can check their [installation guide](https://direnv.net/docs/installation.html). Add the files below to the root and then
run `direnv allow` to allow for the direnv to load the flake.

```
{
  inputs = {
    nixpkgs.url = "nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};

        libraries = with pkgs;[
          webkitgtk
          gtk3
          cairo
          gdk-pixbuf
          glib
          dbus
          openssl_3
          librsvg
        ];

        packages = with pkgs; [
          curl
          wget
          pkg-config
          dbus
          openssl_3
          glib
          gtk3
          libsoup
          webkitgtk
          librsvg
        ];
      in
      {
        devShell = pkgs.mkShell {
          buildInputs = packages;

          shellHook =
            ''
              export LD_LIBRARY_PATH=${pkgs.lib.makeLibraryPath libraries}:$LD_LIBRARY_PATH
              export XDG_DATA_DIRS=${pkgs.gsettings-desktop-schemas}/share/gsettings-schemas/${pkgs.gsettings-desktop-schemas.name}:${pkgs.gtk3}/share/gsettings-schemas/${pkgs.gtk3.name}:$XDG_DATA_DIRS
            '';
        };
      });
}
```
{collapsible="true" collapsed-title="flake.nix"}

```
use flake
```
{collapsible="true" collapsed-title=".envrc"}

### Going for the traditional method

If you wish to opt out of using Nix, you can download all the dependencies yourself. This might be
the longer but easier option since it does not require the pre-requisite knowledge of understanding
Nix. 

The easiest way is to follow the instructions in the [Tauri prerequisites guide](https://tauri.app/v1/guides/getting-started/prerequisites).

## Making a new GUI Repository

It's time to use the Serpenta GUI Standard to create the newest GUI! Since Serpenta has dependencies
itself: Tailwind and Skeleton, we have provided a GUI-starter template that will set these all up for
you (together with page routes for the [Serpenta's multi-window API](Windows.md))

First, start from the template project. This will give you all the required dependencies and a basic
file structure you can follow. 

<seealso>
    <category ref="external">
        <a href="https://tauri.app/v1/guides/getting-started/prerequisites">Tauri v1 Prerequisites guide</a>
        <a href="https://www.skeleton.dev/docs/tauri">Skeleton Svelte Tauri setup guide</a>
        <a href="https://wiki.nixos.org/wiki/Flakes">Nix flakes</a>
    </category>
</seealso>
