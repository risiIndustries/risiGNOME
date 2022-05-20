%global extuuid		risiGNOME@risi.io
%global extdir		%{_datadir}/gnome-shell/extensions/%{extuuid}
%global gschemadir	%{_datadir}/glib-2.0/schemas
%global gitname		risiGNOME
%global giturl		https://github.com/risiOS/%{gitname}
%global srcdir		%{_builddir}/%{gitname}-main

Name:		gnome-shell-extension-risi-gnome
Version:	1
Release:	5%{?dist}
Summary:	Some of risiOS GNOME changes

License:	GPLv2+
URL:		https://github.com/risiOS/risiGNOME
Source0:	https://github.com/risiOS/risiGNOME/archive/refs/heads/main.tar.gz


BuildArch:	noarch
BuildRequires:  glib2
Requires:	gnome-shell-extension-common

%description
This is where we are going to put changes we want to make for the GNOME desktop.

%prep
%autosetup -n risiGNOME-main
rm gnome-shell-extension-risi-gnome.spec

%install
mkdir -p %{buildroot}%{_datadir}/gnome-shell/extensions
cp -ar %{srcdir} %{buildroot}%{extdir}

%files
%{extdir}

%changelog
* Thu Feb 24 2022 PizzaLovingNerd
- Spec file built
