<script lang="ts">
	// import { Icon } from 'svelte-icons'; 
	import { fade } from 'svelte/transition';

	const socialLinks = [
		{ name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
		{ name: 'GitHub', url: 'https://github.com', icon: 'github' },
		{ name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
		{ name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' }
	];

	const quickLinks = [
		{ name: 'Home', url: '/' },
		{ name: 'About Us', url: '/about' },
		{ name: 'Events', url: '/events' },
		{ name: 'Contact', url: '/contact' }
	];
</script>

<footer class="bg-gray-900 text-white py-12">
	<div class="container mx-auto px-6">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
			<!-- Logo and Description -->
			<div class="col-span-1 md:col-span-2 lg:col-span-1">
				<h2 class="text-2xl font-bold mb-4">Finance Club</h2>
				<p class="text-gray-400">
					Empowering students with financial literacy and opportunities to grow.
				</p>
			</div>

			<!-- Quick Links -->
			<div class="col-span-1">
				<h3 class="text-lg font-semibold mb-4">Quick Links</h3>
				<ul class="space-y-2">
					{#each quickLinks as link}
						<li>
							<a
								href={link.url}
								class="text-gray-400 hover:text-white transition-all duration-300"
							>
								{link.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Social Media Links -->
			<div class="col-span-1">
				<h3 class="text-lg font-semibold mb-4">Follow Us</h3>
				<div class="flex space-x-4">
					{#each socialLinks as social}
						<a
							href={social.url}
							target="_blank"
							class="text-gray-400 hover:text-white transition-all duration-300"
						>
							<!-- <Icon name={social.icon} class="w-6 h-6" /> -->
						</a>
					{/each}
				</div>
			</div>

			<!-- Newsletter Subscription -->
			<div class="col-span-1 md:col-span-2 lg:col-span-1">
				<h3 class="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
				<form class="flex flex-col space-y-4">
					<input
						type="email"
						placeholder="Your email"
						class="p-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
					/>
					<button
						type="submit"
						class="p-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300"
					>
						Subscribe
					</button>
				</form>
			</div>
		</div>

		<!-- Divider -->
		<div class="border-t border-gray-800 my-8"></div>

		<!-- Copyright Notice -->
		<div class="text-center text-gray-400">
			<p>
				&copy; {new Date().getFullYear()} Finance Club. All rights reserved.
				<a href="/privacy" class="hover:text-white transition-all duration-300">Privacy Policy</a>
				&middot;
				<a href="/terms" class="hover:text-white transition-all duration-300">Terms of Service</a>
			</p>
		</div>
	</div>
</footer>

