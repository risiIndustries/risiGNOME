%global extuuid		risiGNOME@risi.io
%global extdir		%{_datadir}/gnome-shell/extensions/%{extuuid}
%global gschemadir	%{_datadir}/glib-2.0/schemas
%global gitname		risiGNOME
%global giturl		https://github.com/risiOS/%{gitname}
%global srcdir		%{_builddir}/%{gitname}-%{version}/src

Name:		gnome-shell-extension-risi-gnome
Version:	1
Release:	1%{?dist}
Summary:	Some of risiOS GNOME changes

License:	GPLv2+
URL:		https://extensions.gnome.org/extension/3193/blur-my-shell/
Source0:	%{giturl}/archive/v%{version}.tar.gz#/%{gitname}-v%{version}.tar.gz

BuildArch:	noarch
BuildRequires:  glib2
Requires:	gnome-shell-extension-common

%description
This is where we are going to put changes we want to make for the GNOME desktop.

%prep
%autosetup

%install
mkdir -p %{buildroot}%{_datadir}/gnome-shell/extensions
cp -ar %{srcdir} %{buildroot}%{extdir}

%files
%{extdir}

%changelog
* Thu Feb 24 2022 PizzaLovingNerd
- Spec file built
