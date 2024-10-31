import { Heading, Text, Flex, Button, Grid, Icon, InlineCode, Logo, Background, LetterFx, RevealFx, User, Arrow } from '@/once-ui/components';
import Link from 'next/link';
import styles from './Avatar.module.scss';

export default function Portfolio(
    {params: {locale}}: { params: { locale: string }}
) {
	const links = [
		{
			href: "https://once-ui.com/docs/theming",
			title: "Themes",
			description: "Style your app in minutes.",
		},
		{
			href: "https://once-ui.com/docs/flexComponent",
			title: "Layout",
			description: "Build responsive layouts.",
		},
		{
			href: "https://once-ui.com/docs/typography",
			title: "Typography",
			description: "Scale text automatically.",
		},
	];
    return (
		<Flex
			fillWidth paddingTop="l" paddingX="l"
			direction="column" alignItems="center" flex={1}>
			<RevealFx
  				speed="medium"
  				delay={0}
  				translateY={0}
			>
  				<Flex
   					direction="column"
    				padding="32"
    				gap="12"
  				>
					<User
  						name="MrBogdanYT"
  						subline="Setup Specialist (Minecraft)"
  						tagProps={{
    						label: 'Tehnician',
    						variant: 'gradient'
  						}}
  						avatarProps={{
    						empty: false,
    						src: '/images/pfp.png'
  						}}
					/>
				</Flex>
				<Flex
   					direction="column"
    				padding="32"
    				gap="8"
  				>
					<Text variant="heading-strong-l">
      					Who is MrBogdan?
    				</Text>
    				<Text 
     					onBackground="neutral-medium"
      					marginBottom="1"
   					>
      					Hey! I'm an 14 year-old student from Romania. I develop stuff for Minecraft
    				</Text>
					<Text 
     					onBackground="neutral-medium"
      					marginBottom="1"
   					>
						Servers & worked on one of the biggest servers from my country. With over 100.000+
    				</Text>
					<Text 
     					onBackground="neutral-medium"
      					marginBottom="1"
   					>
						Unique Players & 200+ Online Players, we've managed to create a well established network.
    				</Text>
  				</Flex>
			</RevealFx>
					<Grid
						radius="l"
						border="neutral-medium"
						borderStyle="solid-1"
						columns="repeat(3, 1fr)"
						tabletColumns="1col"
						mobileColumns="1col"
						fillWidth>
						{links.map((link) => (
							<Link
								target="_blank"
								style={{ padding: 'var(--responsive-space-l)' }}
								key={link.href}
								href={link.href}>
								<Flex
									fillWidth paddingY="12" gap="8"
									direction="column">
									<Flex
										fillWidth gap="12"
										alignItems="center">
										<Text
											variant="body-strong-m" onBackground="neutral-strong">
											{link.title}
										</Text>
										<Icon size="s" name="arrowUpRight" />
									</Flex>
									<Text
										variant="body-default-s" onBackground="neutral-weak">
										{link.description}
									</Text>
								</Flex>
							</Link>
						))}
					</Grid>
			<Flex
				as="footer"
				position="relative"
				fillWidth paddingX="l" paddingY="m"
				justifyContent="space-between">
				<Text
					variant="body-default-s" onBackground="neutral-weak">
					© 2024 Powered by <Link href=" ">MrBogdan Management</Link>
				</Text>
				<Flex
					gap="12">
					<Button
						href="https://github.com/MrBogdanYT"
						prefixIcon="github" size="s" variant="tertiary">
						GitHub
					</Button>
					<Button
						href="https://dsc.gg/mrbogdan"
						prefixIcon="discord" size="s" variant="tertiary">
						Discord
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
}
