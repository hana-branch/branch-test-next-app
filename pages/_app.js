import '../styles/globals.css';
import App from 'next/app';
import React from 'react';
import { branchInit, branchLoad } from './branch';

export default class MyApp extends App {
	constructor(props) {
		super(props);
	}

	async componentDidMount(prevProps) {
    await branchLoad();
		await branchInit();
	}

	render() {
		const { Component, pageProps } = this.props

		return <Component {...pageProps} />
	}
}
