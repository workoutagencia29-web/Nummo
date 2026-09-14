'use client';
import React from 'react';
import { Link as RouterLink } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { createPortal } from 'react-dom';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
	LucideIcon,
	Layers,
	Plug,
	Code,
	Shield,
	Activity,
	History,
	Users,
	Handshake,
	Mail,
	FileText,
	Cookie,
	ShieldCheck,
	MessageCircle,
} from 'lucide-react';

const REGISTER_URL = 'https://app.usenummo.com.br/dashboard/register';
const LOGIN_URL = 'https://app.usenummo.com.br/';
const WHATSAPP_URL = 'https://wa.me/5511912002801';

type LinkItem = {
	title: string;
	href: string;
	icon: LucideIcon;
	description?: string;
};

// Link inteligente: rotas internas usam o RouterLink (SPA); âncoras (/#secao) e
// URLs externas (app, WhatsApp) usam <a>. Serve de filho para NavigationMenuLink asChild.
const SmartLink = React.forwardRef<HTMLAnchorElement, { href: string } & React.ComponentProps<'a'>>(
	({ href, className, children, ...props }, ref) => {
		const isHttp = href.startsWith('http');
		const isAnchor = href.startsWith('/#') || href.startsWith('#');
		if (isHttp || isAnchor) {
			return (
				<a
					ref={ref}
					href={href}
					className={className}
					target={isHttp ? '_blank' : undefined}
					rel={isHttp ? 'noopener noreferrer' : undefined}
					{...props}
				>
					{children}
				</a>
			);
		}
		return (
			<RouterLink ref={ref} to={href} className={className} {...props}>
				{children}
			</RouterLink>
		);
	},
);
SmartLink.displayName = 'SmartLink';

export function Header({ dark = false }: { dark?: boolean } = {}) {
	const [open, setOpen] = React.useState(false);
	// Navbar não-fixa: fica no fluxo normal da página e some ao rolar para baixo
	// (reaparece ao voltar ao topo). Na home recebe .nav-over-dark → textos claros.

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn('relative z-50 w-full border-b border-transparent pt-4', {
				'nav-over-dark': dark,
			})}
		>
			<nav className="relative mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-6">
					<RouterLink to="/" className="nav-trigger rounded-md transition-opacity hover:opacity-80" aria-label="Nummo — início">
						<img src="/logo-nummo.svg" alt="Nummo" className="h-6 w-auto" />
					</RouterLink>
					<NavigationMenu className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex">
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="nav-trigger bg-transparent">Produtos</NavigationMenuTrigger>
								<NavigationMenuContent className="bg-background p-1 pr-1.5">
									<ul className="bg-popover grid w-lg grid-cols-2 gap-2 rounded-md border p-2 shadow">
										{productLinks.map((item, i) => (
											<li key={i}>
												<ListItem {...item} />
											</li>
										))}
									</ul>
									<div className="p-2">
										<p className="text-muted-foreground text-sm">
											Tem dúvidas?{' '}
											<a
												href={WHATSAPP_URL}
												target="_blank"
												rel="noopener noreferrer"
												className="text-foreground font-medium hover:underline"
											>
												Fale no WhatsApp
											</a>
										</p>
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="nav-trigger bg-transparent">Empresa</NavigationMenuTrigger>
								<NavigationMenuContent className="bg-background p-1 pr-1.5 pb-1.5">
									<div className="grid w-lg grid-cols-2 gap-2">
										<ul className="bg-popover space-y-2 rounded-md border p-2 shadow">
											{companyLinks.map((item, i) => (
												<li key={i}>
													<ListItem {...item} />
												</li>
											))}
										</ul>
										<ul className="space-y-2 p-3">
											{companyLinks2.map((item, i) => (
												<li key={i}>
													<NavigationMenuLink asChild>
														<SmartLink
															href={item.href}
															className="flex p-2 hover:bg-accent flex-row rounded-md items-center gap-x-2"
														>
															<item.icon className="text-foreground size-4" />
															<span className="font-medium">{item.title}</span>
														</SmartLink>
													</NavigationMenuLink>
												</li>
											))}
										</ul>
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuLink className="px-4" asChild>
								<a href="/#taxas" className="nav-trigger hover:bg-accent rounded-md p-2">
									Taxas
								</a>
							</NavigationMenuLink>
						</NavigationMenuList>
					</NavigationMenu>
				<div className="hidden items-center gap-2 md:flex">
					<Button variant="outline" className="nav-entrar" asChild>
						<a href={LOGIN_URL} target="_blank" rel="noopener noreferrer">
							Entrar
						</a>
					</Button>
					<Button asChild>
						<a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
							Criar Conta
						</a>
					</Button>
				</div>
				<Button
					size="icon"
					variant="outline"
					onClick={() => setOpen(!open)}
					className="nav-toggle md:hidden"
					aria-expanded={open}
					aria-controls="mobile-menu"
					aria-label={open ? "Fechar menu" : "Abrir menu"}
				>
					<MenuToggleIcon open={open} className="size-5" duration={300} />
				</Button>
			</nav>
			<MobileMenu open={open} className="flex flex-col justify-between gap-2 overflow-y-auto">
				<NavigationMenu className="max-w-full">
					<div className="flex w-full flex-col gap-y-2">
						<span className="text-sm">Produtos</span>
						{productLinks.map((link) => (
							<ListItem key={link.title} {...link} />
						))}
						<span className="text-sm">Empresa</span>
						{companyLinks.map((link) => (
							<ListItem key={link.title} {...link} />
						))}
						{companyLinks2.map((link) => (
							<ListItem key={link.title} {...link} />
						))}
						<span className="text-sm">Taxas</span>
						<NavigationMenuLink asChild>
							<a href="/#taxas" className="hover:bg-accent rounded-sm p-2">
								Ver taxas
							</a>
						</NavigationMenuLink>
					</div>
				</NavigationMenu>
				<div className="flex flex-col gap-2">
					<Button variant="outline" className="w-full bg-transparent" asChild>
						<a href={LOGIN_URL} target="_blank" rel="noopener noreferrer">
							Entrar
						</a>
					</Button>
					<Button className="w-full" asChild>
						<a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
							Criar Conta
						</a>
					</Button>
				</div>
			</MobileMenu>
		</header>
	);
}

type MobileMenuProps = React.ComponentProps<'div'> & {
	open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
	if (!open || typeof window === 'undefined') return null;

	return createPortal(
		<div
			id="mobile-menu"
			className={cn(
				'bg-background/95 supports-[backdrop-filter]:bg-background/50 backdrop-blur-lg',
				'fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden',
			)}
		>
			<div
				data-slot={open ? 'open' : 'closed'}
				className={cn(
					'data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out',
					'size-full p-4',
					className,
				)}
				{...props}
			>
				{children}
			</div>
		</div>,
		document.body,
	);
}

function ListItem({
	title,
	description,
	icon: Icon,
	className,
	href,
	...props
}: React.ComponentProps<typeof NavigationMenuLink> & LinkItem) {
	return (
		<NavigationMenuLink className={cn('w-full flex flex-row gap-x-2 data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground rounded-sm p-2', className)} {...props} asChild>
			<SmartLink href={href}>
				<div className="flex aspect-square size-10 items-center justify-center rounded-lg bg-[#2559d8]/[0.08]">
					<Icon className="size-[18px] text-[#2559d8]" />
				</div>
				<div className="flex flex-col items-start justify-center">
					<span className="font-medium">{title}</span>
					<span className="text-muted-foreground text-xs">{description}</span>
				</div>
			</SmartLink>
		</NavigationMenuLink>
	);
}

const productLinks: LinkItem[] = [
	{
		title: 'Plataforma',
		href: '/#plataforma',
		description: 'A infraestrutura de pagamentos da Nummo',
		icon: Layers,
	},
	{
		title: 'Integrações',
		href: '/integracoes',
		description: 'Conecte suas ferramentas favoritas',
		icon: Plug,
	},
	{
		title: 'Documentação',
		href: '/documentacao',
		description: 'API, SDKs e guias para desenvolvedores',
		icon: Code,
	},
	{
		title: 'Segurança',
		href: '/#seguranca',
		description: 'PCI-DSS, antifraude e 3DS 2.0',
		icon: Shield,
	},
	{
		title: 'Status',
		href: '/status',
		description: 'Disponibilidade dos serviços',
		icon: Activity,
	},
	{
		title: 'Changelog',
		href: '/changelog',
		description: 'Novidades e atualizações',
		icon: History,
	},
];

const companyLinks: LinkItem[] = [
	{
		title: 'Sobre',
		href: '/sobre',
		description: 'Nossa história e o nosso time',
		icon: Users,
	},
	{
		title: 'Parceiros',
		href: '/parceiros',
		description: 'Cresça junto com a Nummo',
		icon: Handshake,
	},
	{
		title: 'E-mail',
		href: '/email',
		icon: Mail,
		description: 'Fale com a gente por e-mail',
	},
];

const companyLinks2: LinkItem[] = [
	{
		title: 'Privacidade',
		href: '/privacidade',
		icon: Shield,
	},
	{
		title: 'Termos',
		href: '/termos',
		icon: FileText,
	},
	{
		title: 'Cookies',
		href: '/cookies',
		icon: Cookie,
	},
	{
		title: 'Compliance',
		href: '/compliance',
		icon: ShieldCheck,
	},
	{
		title: 'WhatsApp',
		href: WHATSAPP_URL,
		icon: MessageCircle,
	},
];

