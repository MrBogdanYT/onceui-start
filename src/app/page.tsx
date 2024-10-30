"use client";

import React from 'react';

import { Heading, Text, Flex, Button, Grid, Icon, InlineCode, Logo, Background, LetterFx, SparkleFx, Arrow } from '@/once-ui/components';
import Link from 'next/link';
import styles from './Avatar.module.scss';

export default function Home() {
	// const links = [
	// 	{
	// 		href: "https://once-ui.com/docs/theming",
	// 		title: "Discord",
	// 		description: "Get in touch with me or just say hi =D",
	// 	},
	// 	{
	// 		href: " ",
	// 		title: " ",
	// 		description: " ",
	// 	},
	// 	{
	// 		href: "https://once-ui.com/docs/typography",
	// 		title: "Portfolio",
	// 		description: "Check out my portfolio!",
	// 	},
	// ];

	return (
		<Flex
			fillWidth paddingTop="l" paddingX="l"
			direction="column" alignItems="center" flex={1}>
			<Flex
				position="relative"
				as="section" overflow="hidden"
				fillWidth minHeight="0" maxWidth={68}
				direction="column" alignItems="center" flex={1}>
				<Flex
					as="main"
					direction="column" justifyContent="center"
					fillWidth fillHeight padding="l" gap="l">
					<Flex
						mobileDirection="column"
						fillWidth gap="24">
						<Flex
							position="relative"
							flex={2} paddingTop="12" paddingX="xl">
							{/* <Logo size="xl" icon={false} style={{zIndex: '1'}}/> */}
							<img src={'./images/pfp.png'} alt="xd" />
						</Flex>
						<Flex
							position="relative"
							flex={4} gap="24" marginBottom="104"
							direction="column">
							<InlineCode
								className="shadow-m"
								style={{
									width: 'fit-content',
									padding: 'var(--static-space-8) var(--static-space-16)',
									backdropFilter: 'blur(var(--static-space-1))'}}>
								mrbogdan <span className="brand-on-background-medium">/ whoisbogdann</span>
							</InlineCode>
							<Heading
								wrap="balance"
								variant="display-strong-s">
								<span className="font-code">
									{/* <LetterFx
										trigger="instant">
										Server & Configuration Specialist (Minecraft)
									</LetterFx> */}
									<SparkleFx
  										speed="medium"
  										count={50}
  										trigger
									>
  										Server & Configuration Specialist (Minecraft)
									</SparkleFx>
								</span>
							</Heading>
							<Button
								id="readDocs"
								href="/portfolio"
								variant="secondary">
								<Flex alignItems="center">
									Learn more about me =D
									<Arrow trigger="#readDocs"/>
								</Flex>
							</Button>
						</Flex>
					</Flex>
					{/* <Grid
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
									fillWidth paddingY="8" gap="8"
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
					</Grid> */}
				</Flex>
			</Flex>
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
					{/* <Button
						href="https://imgur.com/a/mrbogdanyts-portfolio-ScjusmI"
						prefixIcon="check" size="s" variant="tertiary">
						Portfolio (Outdated)
					</Button> */}
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
