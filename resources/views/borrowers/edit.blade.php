@extends('layouts.backend.master')

@push('CustomJS')
    <script src="{{ asset('vendor/jQuery-TWzipcode-master/jquery.twzipcode.min.js') }}" defer></script>
    <script src="{{ asset('js/borrowers/edit.js') }}" defer></script>
@endpush

@section('content')

	@component('components.breadcrumbs')
		<li class="breadcrumb-item">
			<a href="#">{{ __('People Management') }}</a>
		</li>
		<li class="breadcrumb-item">
			<a href="{{ route('borrowers.index') }}">{{ __('Borrowers') }}</a>
		</li>
		<li class="breadcrumb-item active">{{ __('Edit') }}</li>
    @endcomponent

    <div id="borrower">
        <span id="BorrowersIndexURL" class="d-none">{{ route('borrowers.index') }}</span>
        <span id="BorrowersGetOneURL" class="d-none">{{ route('borrowers.getOne', [$borrower->id]) }}</span>
        <span id="BorrowersUpdateURL" class="d-none">{{ route('borrowers.update', [$borrower->id]) }}</span>
        <span id="AgenciesListURL" class="d-none">{{ route('agencies.getList') }}</span>
        <span id="AgenciesStoreURL" class="d-none">{{ route('agencies.store') }}</span>

        <borrower-update-form :borrower="borrower"></borrower-update-form>
    </div>

@endsection
