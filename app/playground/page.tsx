"use client";

import { useState } from "react";
import Modal from "./modal/Modal";
import Tabs from "./tabs/Tabs";
import Disclosure from "./disclosure/Disclosure";

export default function PlaygroundPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabs = [
    {
      id: "training",
      label: "Training",
      content: (
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Training Plan
          </h3>

          <p className="mt-2 text-slate-600">
            Your training sessions and weekly workload appear here.
          </p>
        </div>
      ),
    },
    {
      id: "recovery",
      label: "Recovery",
      content: (
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Recovery
          </h3>

          <p className="mt-2 text-slate-600">
            Track sleep, recovery, and readiness here.
          </p>
        </div>
      ),
    },
    {
      id: "goals",
      label: "Goals",
      content: (
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Goals
          </h3>

          <p className="mt-2 text-slate-600">
            Monitor your athletic goals and progress here.
          </p>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-900">
          Component Playground
        </h1>

        <p className="mt-2 text-slate-600">
          Accessible components built from scratch with React and TypeScript.
        </p>

        {/* Modal */}
        <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">
            Modal
          </h2>

          <p className="mt-2 text-slate-600">
            Test the modal using your keyboard.
          </p>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="mt-4 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Open modal
          </button>
        </section>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Training Session"
        >
          <p>
            This is an accessible modal built from scratch.
          </p>

          <p className="mt-2">
            Use Tab, Shift + Tab, and Escape to test the keyboard behavior.
          </p>
        </Modal>

        {/* Tabs */}
        <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">
            Tabs
          </h2>

          <p className="mt-2 mb-6 text-slate-600">
            Use the arrow keys to move between tabs.
          </p>

          <Tabs tabs={tabs} />
        </section>

        {/* Disclosure */}
        <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">
            Disclosure
          </h2>

          <p className="mt-2 mb-6 text-slate-600">
            Press Enter or Space to show and hide the content.
          </p>

          <Disclosure title="Training Details">
            <p>
              This section contains additional information about the
              athlete&apos;s training session.
            </p>

            <p className="mt-2">
              The disclosure can be opened and closed using the keyboard.
            </p>
          </Disclosure>
        </section>
      </div>
    </main>
  );
}