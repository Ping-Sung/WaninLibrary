@extends('layouts.backend.master')

@push('CustomJS')
    <script src="{{ asset('js/circulation/unreturns/index.js') }}" defer></script>
@endpush

@section('content')

    @component('components.breadcrumbs')
        <li class="breadcrumb-item">
            <a href="#">{{ __('Circulation') }}</a>
        </li>
        <li class="breadcrumb-item">
            <a href="{{ route('unreturns.index') }}">借出與逾期</a>
        </li>
        <li class="breadcrumb-item active">{{ __('Index') }}</li>
    @endcomponent
    
	<div id="unreturn">
		<span id="UnreturnsGetList" class="d-none">{{ route('unreturns.getList') }}</span>

        <unreturns-table 
            :unreturns="unreturns" 
            :rows-per-page="rowsPerPage" 
            :page-num="pageNum" 
            :total-page="totalPage" 
            v-on:update-unreturns="updateUnreturns">
        </unreturns-table>
	</div>
@endsection
